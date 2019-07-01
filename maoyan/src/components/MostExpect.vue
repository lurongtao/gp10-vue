<template>
  <div class="most-expected">
    <p class="title">近期最受期待</p>
    <div v-if="list.length==0" class="spinner">
      <mt-spinner type="snake"></mt-spinner>
    </div>
    <div class="most-expected-list">
      <div>
        <div class="expected-item"
          v-for="m in list"
          :key="m.id"
        >
          <div class="poster default-img-bg">
            <img
              :src="m.img | replace('170.230')"
            >
            <span class="wish-bg"></span>
            <span class="wish">
              <span class="wish-num">{{m.wish}}</span>人想看
            </span>
            <div class="toggle-wish" data-wishst="0" data-movieid="1218141">
              <span></span>
            </div>
          </div>
          <h5 class="name line-ellipsis">{{m.nm}}</h5>
          <p class="date">{{m.comingTitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../utils/http'
import BScroll from 'better-scroll'
import { Toast, Spinner, Indicator } from 'mint-ui'
export default {
  data() {
    return {
      list: []
    }
  },

  created() {
    this.page = 0
    this.pagesize = 10
    this.isFinished = true // 是否可以加载下一页（true：可以加载）
  },

  methods: {
    async loadData(page, pagesize) {
      return await http.get({
        url: '/ajax/mostExpected',
        params: {
          ci: 1,
          limit: pagesize,
          offset: page * pagesize,
          token: ''
        }
      })
    },

    scroll() {
      let that = this

      let bScroll = new BScroll('.most-expected-list', {
        scrollX: true,
        scrollY: false
      })

      bScroll.on('scrollEnd', async function() {
        if (that.isFinished) {
          // 为了防止 没有完成ajax数据时，用户频繁拖拽再次请求数据
          that.isFinished = false

          // 当用户拖拽不到滚动条尾部时 和 当前页面一定要在前3页内（以为接口只有3页数据），不能触发ajax请求
          if (this.maxScrollX - this.x >= 0 && that.page < 3) {
            Indicator.open()

            let result = await that.loadData(that.page, that.pagesize)
            that.list = [ ...that.list, ...result.coming ]

            // 当新页的数据加载完毕后，才做page的更新。目的是为了Toast再滚动到第3页边界时再显示。
            that.$nextTick(() => {
              that.page++
              that.isFinished = true
              Indicator.close()
            })
          }
        }

        if (that.page >= 3 && this.maxScrollX - this.x >= 0) {
          Toast({
            message: '没有更多了~',
            position: 'right',
            duration: 2000
          })
        }
        
      })
    }
  },

  async mounted() {
    let result = await this.loadData(this.page, this.pagesize)
    this.list = result.coming
    this.page++

    this.$nextTick(() => {
      this.scroll()
    })
  },

  components: {
    [Spinner.name]: Spinner
  }
}
</script>

<style lang="stylus" scoped>
.most-expected
  height 2.2rem
  .most-expected-list > div
    width: max-content
  .spinner
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
</style>