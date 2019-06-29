import Vue from 'vue'

const replace = (value, size) => {
  return value.replace('w.h', size)
}

Vue.filter('replace', replace)