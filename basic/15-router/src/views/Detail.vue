<template>
  <div>
    电视剧：{{ id }} | {{ abc }}
    <div>
      <button @click="handleClick">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'abc'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },

  methods: {
    handleClick() {
      this.$router.replace('/')
    }
  },

  mounted() {
    // console.log(0)
  },

  updated() {
    // console.log(1)
  },

  // beforeRouteUpdate(to, from, next) {
  //   this.id = to.params.id
  //   // 必须resolve
  //   next()
  // }

  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // }
}
</script>