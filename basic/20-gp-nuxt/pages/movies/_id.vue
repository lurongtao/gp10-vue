<template>
  <div class="my-5">
    <h1 class="display-3 my-5">
      {{ movie.nm }}
    </h1>
    <img
      :src="movie.img"
      :alt="movie.nm"
      class="rounded w-100 mb-3"
    >
    <div>
      {{ movie.star }}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'fullscreen',
  validate({params}) {
    return /^\d+$/.test(params.id)
  },

  async asyncData({ $axios, params, error }) {
    try {
      let movie = await $axios.$get('http://localhost:9000/movieList/' + params.id)
      return {
        movie
      }
    } catch (e) {
      error({
        statusCode: 404,
        message: '页面没有找到'
      })
    }
  } 
}
</script>