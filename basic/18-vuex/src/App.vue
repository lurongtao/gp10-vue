<template>
  <div>
    <h1>产品列表</h1>
    <Products :products="products"></Products>
    <hr />
    <h1>购物车</h1>
    <Cart></Cart>
  </div>
</template>

<script>
import Products from './components/Products'
import Cart from './components/Cart'

export default {
  components: {
    Products,
    Cart
  },

  computed: {
    products() {
      return this.$store.state.products.all
    }
  },

  created() {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
