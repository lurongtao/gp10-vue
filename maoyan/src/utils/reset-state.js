export default (to, vm) => {
  if (to.name !== 'detail'){
    vm.$store.commit('setPosition', 0)
    vm.$store.commit('setFirstData', {})
    vm.$store.commit('resetPage')
  }
}