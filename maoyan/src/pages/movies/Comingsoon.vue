<template>
  <div class="container">
    <div class="tab-content" id="comingsoon-scroll">
      <div class="page f-hot active" data-hot=".f-hot" data-cid="c_3j5p10oz">
        <div class="list-wrap" style="margin-top: 0px;">
          <most-expect></most-expect>
          <div class="coming-list">
            <movie-list :list="movieList"></movie-list>
          </div>
        </div>
        <div class="more"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MostExpect from '@/components/MostExpect'
import MovieList from '@/components/movielist/MovieList'
import _ from 'lodash'
import http from '../../utils/http'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      movieList: []
    }
  },

  components: {
    MostExpect,
    MovieList
  },

  mounted() {
    this.scroll({
      vm: this,
      container: '#comingsoon-scroll',
      params: {
        firstReq: {
          url: '/ajax/comingList',
          params: {
            token: '',
            limit: 12,
            ci: 1
          }
        },
        moreReq: {
          url: '/ajax/moreComingList',
          params: {
            token: ''
          }
        }
      }
    })
  },
}
</script>

<style lang="stylus" scoped>
.container {
  flex: 1
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  padding-top .44rem
  width 100%
  .tab-content {
    height: 100%;
    overflow: hidden;

    .page {
      position: static;
      padding-right: .15rem;
    }
  }
}
</style>