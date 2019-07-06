<template>
  <div class="container">
    <div class="tab-content" id="intheater-scroll">
      <div class="page n-hot active">
        <div class="list-wrap">
          <MovieItem
            v-for="movie in movieList"
            :key="movie.id"
            :movie="movie"
            from="intheaters"
          >
          </MovieItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '@/components/movielist/MovieItem'
import resetState from 'utils/reset-state'
export default {
  components: {
    MovieItem
  },

  beforeRouteLeave(to, from, next) {
    resetState(to, this)
    next()
  },

  computed: {
    movieList() {
      return this.$store.state.data.movieList
    }
  },

  async mounted() {
    this.scroll({
      vm: this,
      container: '#intheater-scroll',
      params: {
        firstReq: {
          url: '/ajax/movieOnInfoList',
          params: {
            token: ''
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
  }
}
</script>

<style lang="stylus" scoped>
.container
  flex 1
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  width 100%
  padding-top .44rem
  .tab-content
    height 100%
    overflow hidden
    .page
      position static
</style>