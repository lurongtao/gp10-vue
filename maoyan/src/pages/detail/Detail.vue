<template>
  <div class="detail-container">
    <header>
      <i class="icon-back" @click="handleClick"></i>
      <b>{{movie.nm}}</b>
    </header>
  </div>
</template>

<script>
import http from '../../utils/http'
export default {
  data() {
    return {
      movie: {}
    }
  },

  created() {
    this.movie.nm = this.$route.params.nm
  },

  async mounted() {
    let result = await http.get({
      url: '/ajax/detailmovie',
      params: {
        movieId: this.$route.params.id
      }
    })

    this.movie = result.detailMovie
  },

  async activated() {
    this.movie.nm = this.$route.params.nm
  },

  methods: {
    handleClick() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus">
.detail-container
  height 100%
  display flex
  flex-direction column
  header
    height .5rem
    background #e54847
    text-align center
    line-height .5rem
    color #fff
    font-size .18rem
    font-weight 300
    position relative
    i.icon-back:before
      content: "";
      display: block;
      position: absolute;
      top: .16rem;
      left: .2rem;
      width: 16px;
      height: 16px;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      -webkit-transform: rotate(45deg); 
      transform: rotate(45deg);
</style>
