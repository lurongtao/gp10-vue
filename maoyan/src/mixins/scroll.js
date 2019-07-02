import Vue from 'vue'

import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'
import _ from 'lodash'

Vue.mixin({
  methods: {
    scroll: async ({
      vm=null,
      params={}
    } = {}) => {
      // page 存储初始页码
      let page = 0
      // movieIds 将数组做分组，目的是传递ids来进行分页
      let movieIds = []
      
      // 先显示一个loading
      Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      })
      
      // 第一页信息的展示
      let result = await http.get(params.firstReq || {})
      // 正在热映和即将上映的第一页的接口不一致，导致我们需要用两种方法来回去list
      vm ? vm.movieList = result.movieList || result.coming : null
      // slice 方法用来过滤掉第一页信息，加载更多是从第二页开始
      movieIds = _.chunk(result.movieIds && result.movieIds.slice(12) || [], 10)

      // 等到数据到来时，关闭loading
      Indicator.close()

      // 定义betterscroll, 实现当用户上拉的时候，加载下一页数据
      vm && vm.$nextTick(() => {
        let bScroll = new BScroll('.tab-content', {
          click: true,
          pullUpLoad: true
        })

        bScroll.on('pullingUp', async () => {
          // 表示有下一页
          if(page < movieIds.length) {
            Indicator.open()

            // page是变化的，且movieIds是从接口里拿到的数据，所以我们需要在scroll方法里做params的merge
            // merge是深合并
            let mergedParams = _.merge(params.moreReq, {
              params: {
                movieIds: movieIds[page].join(',')
              }
            })

            // 第1+次请求
            let result = await http.get(mergedParams)

            // 做数组的追加
            vm.movieList = [...vm.movieList, ...result.coming]

            // 等到DOM渲染完毕，再做后期处理
            vm.$nextTick(() => {
              page++ // 累计页数
              bScroll.refresh() // 重置bScroll高度
              Indicator.close() // 关闭loading
              bScroll.finishPullUp() // 可以加载下一页了
            })
          } else {
            //到了最后一页，需要再调用一次finishPullUp，目的是每次都给用户提示到底了
            bScroll.finishPullUp()
            
            Toast({
              message: '到底了~',
              position: 'bottom',
              duration: 2000
            });
          }
        })
      })
    }
  }
})