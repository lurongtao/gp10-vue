import Vue from 'vue'

import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'

Vue.mixin({
  methods: {
    async scroll({vm, container, params}) {

      let page = 0

      Indicator.open()

      let { movieList, coming, movieIds } = await http.get(params.firstReq)
      vm.movieList = movieList || coming

      Indicator.close()

      let bScroll = new BScroll(container, {
        pullUpLoad: true
      })

      console.log(bScroll)

      let chunkedMovieIds = _.chunk(movieIds.slice(12), 10)

      bScroll.on('pullingUp', async function() {
        if (page < chunkedMovieIds.length) {
          let mergedReq = _.merge(params.moreReq, {
            params: {
              movieIds: chunkedMovieIds[page].join(',')
            }
          })
  
          Indicator.open()
          vm.movieList = [...vm.movieList, ...(await http.get(mergedReq)).coming]
  
          vm.$nextTick(() => {
            page++
            this.refresh()
            this.finishPullUp()
            Indicator.close()
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
    }
  }
})