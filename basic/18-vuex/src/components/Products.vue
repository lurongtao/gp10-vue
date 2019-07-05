<template>
  <div>
    <ul>
      <li 
        v-for="product in products"
        :key="product.id"
      >
        {{product.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products']
}
</script>
