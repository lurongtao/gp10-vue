<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './Nav'
import Intheaters from './Intheaters'
export default {
  components: {
    Nav,
    Intheaters
  }
}
</script>

<style lang="stylus" scoped>
div
  display flex
  flex-direction column
  height 100%
</style>