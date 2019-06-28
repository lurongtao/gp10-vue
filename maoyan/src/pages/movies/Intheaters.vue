<template>
  <div>
    <MovieItem></MovieItem>
  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem'
export default {
  components: {
    MovieItem
  }
}
</script>

<style lang="stylus">
div
  flex 1
  overflow-y scroll
</style>