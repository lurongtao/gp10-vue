<template>
  <div class="container">
    <div class="tab-content">
      <div class="page n-hot active">
        <div class="list-wrap">
          <MovieItem
            v-for="movie in movieList"
            :key="movie.id"
            :movie="movie"
          >
          </MovieItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem'
import http from '../../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'
import _ from 'lodash'

export default {
  components: {
    MovieItem
  },

  data() {
    return {
      movieList: []
    }
  },

  beforeCreate() {
    this.movieIds = []
  },

  async mounted() {

    let page = 0

    Indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })

    let result = await http.get({
      url: '/ajax/movieOnInfoList?token='
    })
    this.movieList = result.movieList
    this.movieIds = _.chunk(result.movieIds.slice(12), 10)

    Indicator.close()

    this.$nextTick(() => {
      let bScroll = new BScroll('.tab-content', {
        click: true,
        pullUpLoad: true
      })

      bScroll.on('pullingUp', async () => {
        if(page < this.movieIds.length) {
          Indicator.open()

          let result = await http.get({
            url: '/ajax/moreComingList',
            params: {
              token: '',
              movieIds: this.movieIds[page].join(',')
            }
          })
          this.movieList = [...this.movieList, ...result.coming]

          this.$nextTick(() => {
            page++ // 累计页数
            bScroll.refresh() // 重置bScroll高度
            Indicator.close() // 关闭loading
            bScroll.finishPullUp() // 可以加载下一页了
          })
        } else {
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
</script>

<style lang="stylus" scoped>
.container
  flex 1
  .tab-content
    height 100%
    over-flow hidden
    .page
      position static
</style>