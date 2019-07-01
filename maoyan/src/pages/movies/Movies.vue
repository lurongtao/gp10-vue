<template>
  <div>
    <Nav></Nav>
    <Intheaters></Intheaters>
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