<template>
  <div>
    <div 
      v-for="(value,key) in movieList"
      :key="key"
    >
      <p class="group-date">{{key}}</p>
      <movie-item
        v-for="item in value" 
        :key="item.id" 
        :movie="item"
      ></movie-item>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem'
import _ from 'lodash'
export default {
  props: ['list'],
  
  data() {
    return {
      
    }
  },

  mounted() {
    // console.log(this.list)
  },

  components: {
    MovieItem
  },

  computed: {
    movieList() {
      let result = _.groupBy(this.list, function(item){
        return item['comingTitle'] || '正在热映'
      })
      return result
    }
  }
}
</script>