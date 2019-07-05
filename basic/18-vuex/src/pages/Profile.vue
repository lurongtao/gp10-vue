<template>
  <div>
    <ul>
      <li v-for="p in products" :key="p">{{p}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    products() {
      return this.$store.state.products.all
    }
  },
  created() {
    this.$store.commit('products/getAllProducts')
  }
}
</script>