<template>
  <span>
    {{count100}}
    <button @click="handleClick">+</button>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    handleClick() {
      this.$store.dispatch('incrementA')
    }
  },
  computed: mapGetters([
    'count100'
  ]),
}
</script>