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
    let result = await http.get('/ajax/movieOnInfoList?token=')
    this.movieList = result.movieList
  }
}
</script>

<style lang="stylus" scoped>
.container
  flex 1
  .tab-content
    height 100%
    overflow-y scroll
    .page
      position static
</style>