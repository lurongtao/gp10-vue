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
            <div class="title line-ellipsis v3dimax_title">蜘蛛侠：英雄远征</div>
              <span class="version v3d imax"></span>
          </div>
          <div class="detail column">
            <div class="score line-ellipsis"> 
              <span class="score-suffix">观众评 </span>
              <span class="grade">9.2</span>
            </div>
            <div class="actor line-ellipsis">主演: 汤姆·赫兰德,杰克·吉伦哈尔,塞缪尔·杰克逊</div>
            <div class="show-info line-ellipsis">今天223家影院放映5183场</div>
          </div>
        </div>
        <div class="button-block" data-id="1198925">
          <div class="btn normal"><span class="fix" data-bid="dp_wx_home_movie_btn">购票</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
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