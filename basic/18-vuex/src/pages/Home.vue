<template>
  <span>
    <button @click="handleIncrementClick">+</button>
    {{count100}}
    {{count}}
    <button @click="decrement(8)">-</button>
  </span>
</template>

<script>
import { mapGetters, mapState, mapMutation, mapMutations } from 'vuex'
import { INCREMENT_ACTION, DECREMENT_ACTION } from '../store/action-types'
import { INCREMENT_MUTATION, DECREMENT_MUTATION } from '../store/mutation-types'
export default {
  methods: {
    handleIncrementClick() {
      this.$store.dispatch(INCREMENT_ACTION)
    },
    ...mapMutations({
      decrement: DECREMENT_MUTATION
    })
  },
  computed: {
    ...mapGetters([
      'count100'
    ]),
    ...mapState(['count'])
  },
}
</script>