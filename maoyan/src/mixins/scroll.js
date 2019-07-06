import Vue from 'vue'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'

Vue.mixin({
  methods: {
    async scroll({vm, container, params}) {

      // 当组件第一次被渲染时，拉去第一个接口
      // 正在热映接口: 包含 movieList字段
      // 即将上映接口：包含 coming 字段
      if (!vm.$store.state.data.movieList && !vm.$store.state.data.coming) {
        Indicator.open()
        await vm.$store.dispatch('loadFirstData', params)
        Indicator.close()
      }

      let bScroll = new BScroll(container, {
        pullUpLoad: true,
        click: true
      })

      // 要在从详情页返回时，位置要恢复到上次滚动的地方
      bScroll.scrollTo(0, vm.$store.state.position)

      let movieIds = vm.$store.state.data.movieIds

      let chunkedMovieIds = _.chunk(movieIds.slice(12), 10)

      bScroll.on('pullingUp', async function() {
        let page = vm.$store.state.page
        if (page < chunkedMovieIds.length) {
          let mergedReq = _.merge(params.moreReq, {
            params: {
              movieIds: chunkedMovieIds[page].join(',')
            }
          })
  
          Indicator.open()

          // vuex 的 action 派发后返回 Promise
          await vm.$store.dispatch('loadMoreData', mergedReq)

          vm.$nextTick(() => {
            this.refresh()
            this.finishPullUp()
            Indicator.close()

            // page++
            vm.$store.commit('setPage')
          })

        } else {
          this.finishPullUp()
          Toast({
            message: '到底了~',
            position: 'bottom',
            duration: 2000
          })
        }
      })

      // 保存当前滚动的地方
      bScroll.on('scrollEnd', function() {
        vm.$store.commit('setPosition', this.y)
      })
    }
  }
})