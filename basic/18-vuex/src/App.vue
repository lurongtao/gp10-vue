<template>
  <div>
    {{ sum }}
    <home></home>
  </div>
</template>

<script>
import Home from './pages/Home'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      count: 5
    }
  },

  mounted() {
    
  },

  computed: {
    sum() {
      return this.$store.getters.sum(7)
    },
    ...mapGetters([
      'count100'
    ]),
    ...mapState({
      count2(state) {
        return state.count + 2
      },
      count3: 'count',
      count4(state) {
        return state.count + this.count
      }
    })
  },

  components: {
    Home
  }
}
</script>
