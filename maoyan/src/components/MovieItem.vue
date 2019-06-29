<template>
  <div class="item">
    <div class="main-block">
      <div class="avatar">
        <div class="default-img-bg">
          <img :src="movie.img | replace('192.270')" width="64" height="90" onerror="this.style.visibility='hidden'">		
        </div>
      </div> 
      <div class="mb-outline-b content-wrapper">
        <div class="column content">
          <div class="box-flex movie-title">
            <div class="title line-ellipsis v3dimax_title">{{movie.nm}}</div>
              <span class="version" :class="movie.version"></span>
          </div>
          <div class="detail column">
            <div class="score line-ellipsis"> 
              <span class="score-suffix">观众评 </span>
              <span class="grade">{{movie.sc}}</span>
            </div>
            <div class="actor line-ellipsis">主演: {{movie.star}}</div>
            <div class="show-info line-ellipsis">{{movie.showInfo}}</div>
          </div>
        </div>
        <movie-button 
          :showst="movie.showst"
        ></movie-button>
      </div>
    </div>
  </div>
</template>

<script>
import MovieButton from './MovieButton'
export default {
  props: {
    movie: Object
  },

  components: {
    MovieButton
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
@import '~@/assets/styles/border.styl'
.content .line-ellipsis
  ellipsis(100%)

.tab-content .list-wrap .item .name, .tab-content .list-wrap .item .title
  display inline-block

.tab-content .list-wrap .item .movie-title
  display flex

.tab-content .list-wrap .item .content-wrapper
  border_1px(0 0 1px 0)

.tab-content .list-wrap .item .content-wrapper
  height 100% !important
  max-height 100% !important
  margin-right .15rem
</style>