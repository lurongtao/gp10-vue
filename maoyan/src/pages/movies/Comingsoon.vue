<template>
  <div class="container">
    <div class="tab-content">
      <div class="page f-hot active" data-hot=".f-hot" data-cid="c_3j5p10oz">
        <div class="list-wrap" style="margin-top: 0px;">
          <most-expect></most-expect>
          <div class="coming-list">
            <div>
              <p class="group-date">7月2日 周二</p>

              <div class="item" data-id="346172" data-bid="dp_wx_home_movie_list">
                <div class="main-block">
                  <div class="avatar" sort-flag>
                    <div class="default-img-bg">
                      <img
                        src="https://p0.meituan.net/128.180/movie/89c697ccd689f04efa04de649a9fe8ec5732189.jpg"
                        onerror="this.style.visibility='hidden'"
                      >
                    </div>
                  </div>
                  <div class="mb-outline-b content-wrapper">
                    <div class="column content">
                      <div class="box-flex movie-title">
                        <div class="title line-ellipsis">九龙不败</div>
                      </div>

                      <div class="detail column">
                        <div class="wantsee line-ellipsis">
                          <span class="person">57467</span>
                          <span class="p-suffix">人想看</span>
                        </div>

                        <div class="actor line-ellipsis">主演: 张晋,安德森·席尔瓦,郑嘉颖</div>

                        <div class="actor line-ellipsis">2019-07-02上映</div>
                      </div>
                    </div>

                    <div class="button-block" data-id="346172">
                      <div class="btn pre" data-id="346172">
                        <span class="fix" data-bid="dp_wx_home_movie_btn">预售</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="more"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MostExpect from '@/components/MostExpect'
export default {
  components: {
    MostExpect
  }
}
</script>

<style lang="stylus" scoped>
.container {
  flex: 1;

  .tab-content {
    height: 100%;
    over-flow: hidden;

    .page {
      position: static;
      padding-right: .15rem;
    }
  }
}
</style>