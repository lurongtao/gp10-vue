<template>
  <div class="button-block" data-id="1198925">
    <div class="btn" :data-wishst="movie.wishst" :class="type"><span class="fix" data-bid="dp_wx_home_movie_btn">{{text}}</span></div>
  </div>
</template>

<script>
export default {
  props: ['movie'],

  computed: {
    text() {
      return this.movie.showst == 3 ? '购票' : this.movie.showst == 4 ? '预售' : '想看'
    },
    type() {
      return this.movie.showst == 3 ? 'normal' : this.movie.showst == 4 ? 'pre' : 'toggle-wish-btn'
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn.toggle-wish-btn[data-wishst="0"]
  background-color #faaf00
</style>