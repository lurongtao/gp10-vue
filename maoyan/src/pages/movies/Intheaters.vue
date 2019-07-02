<template>
  <div class="container">
    <div class="tab-content">
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
export default {
  components: {
    MovieItem
  },

  data() {
    return {
      movieList: []
    }
  },

  async mounted() {
    this.scroll({
      vm: this,
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
  .tab-content
    height 100%
    over-flow hidden
    .page
      position static
</style>