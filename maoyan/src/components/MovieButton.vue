<template>
  <div class="button-block" data-id="1198925">
    <div class="btn" :class="type"><span class="fix" data-bid="dp_wx_home_movie_btn">{{text}}</span></div>
  </div>
</template>

<script>
export default {
  props: ['showst'],

  computed: {
    text() {
      return this.showst == 3 ? '购票' : this.showst == 4 ? '预售' : '想看'
    },
    type() {
      return this.showst == 3 ? 'normal' : this.showst == 4 ? 'pre' : 'toggle-wish-btn'
    }
  }
}
</script>