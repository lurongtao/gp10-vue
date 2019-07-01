<template>
  <div>
    Movie
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log('Movies has destroyed.')
  },

  beforeRouteUpdate(to, from, next) {
    // this.id = to.params.id
    console.log('movie beforeRouteUpdate')
  }
}
</script>