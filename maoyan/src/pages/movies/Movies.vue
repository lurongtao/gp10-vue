<template>
  <div class="movies-container">
    <Nav></Nav>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
  data() {
    return {
      transitionName: ''
    }
  },

  components: {
    Nav
  },

  watch: {
    '$route' (to, from) {
      // console.log(to.meta, from.meta)
      this.transitionName = to.meta > from.meta ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style lang="stylus">
div.movies-container
  display flex
  flex-direction column
  height 100%

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active
  transition all .3s

.slide-left-enter,
.slide-right-leave-to
  transform translate3d(100%, 0, 0)
.slide-left-leave-to,
.slide-right-enter
  transform translate3d(-100%, 0, 0)

</style>