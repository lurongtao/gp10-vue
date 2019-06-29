<template>
  <div>
    <h1>
      <router-link active-class="active" exact to="/">电影</router-link> | 
      <router-link active-class="active" to="/tv">电视剧</router-link>
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this)
  },
}
</script>

<style>
  .active {
    background: yellow;
  }
</style>