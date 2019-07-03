<template>
  <div>
    <ul>
      <li 
        v-for="tv in Tvs" 
        :key="tv.id"
        @click="handleClick(tv.id)"
      >
        {{tv.name}}
      </li>
    </ul>
    <router-view></router-view>
    <router-view name="sidebar"></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      Tvs: [{
        id: 0,
        name: '封神榜'
      }, {
        id: 1,
        name: '西游记'
      }]
    }
  },

  methods: {
    handleClick(id) {
      // console.log(id)
      this.$router.push({
        name: 'detail',
        query: {
          id
        }
      })
    }
  },

  destroyed() {
    // console.log('Tv has destroyed.')
  }
}
</script>