<template>
  <div class="container">
    <h1 class="display-1 my-5">{{ pageName }}</h1>
    <span
      class="badge badge-pill badge-primary"
      @click="add">Count {{ count }}</span>

    <ul>
      <li v-for="movie in movies" :key="movie.id" @click="handleClick(movie.id)">
        {{movie.nm}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({$axios, store}) {
    let result = await $axios.$get('http://localhost:9000/movieList')
    store.commit('demo/loadMovies', result)
  },

  computed: {
    pageName() {
      return this.$store.state.demo.pageName
    },
    count() {
      return this.$store.state.demo.count
    },
    movies() {
      return this.$store.state.demo.movies
    }
  },
  methods: {
    add() {
      this.$store.dispatch('demo/add', 2)
    },

    handleClick(id) {
      this.$store.commit('demo/delete', id)
    }
  }
}
</script>