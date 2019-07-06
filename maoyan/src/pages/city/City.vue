<template>
<div>
    <section id="city-list" class="city-list-container" style="display: block;">
      <div>
        <section>
          <div id="locate" class="city-title">
            定位城市
          </div>
          <div class="city-list city-list-inline clearfix">
            <div class="location-city">定位失败，请点击重试</div>
          </div>
        </section>

        <section class="history-city-list">
          <div id="history" class="city-title">
            最近访问城市
          </div>
          <div class="city-list city-list-inline clearfix">
            <div class="city-item" data-nm="北京" data-id="1">
              北京
            </div>
          </div>
        </section>  

        <section>
          <div id="hot" class="city-title">
            热门城市
          </div>
          <div class="city-list city-list-inline clearfix">
            <div class="city-item"
              v-for="city in hotCities" 
              :key="city.id"
              @click="pickCity(city.name)"
            >
              {{city.name}}
            </div>
          </div>
        </section>

        <section>
          <div v-for="(value,key) in cities" :key="key">
            <div :id="key" class="city-title city-title-letter">
              {{key}}
            </div>
            <div class="city-list city-list-block clearfix">
              <div class="city-item" @click="pickCity(city.name)" v-for="city in value" :key="city.id">
                {{city.name}}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="nav" style="z-index: 10000">
      <div class="nav-item" data-id="locate" @click="scrollToElement('#locate')">
        定位
      </div>
      <div class="nav-item" data-id="history" @click="scrollToElement('#history')">
        最近
      </div>
      <div class="nav-item" data-id="hot" @click="scrollToElement('#hot')">
        热门
      </div>
      <div class="nav-letter nav-item" 
        @click="scrollToElement(`#${key}`)" 
        v-for="(value, key) in cities" 
        :key="key"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="key"
      >
        {{key}}
      </div>
    </section>
</div>


</template>

<script>
import http from 'utils/http'
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      hotCities: [],
      cities: {}
    }
  },

  methods: {
    scrollToElement(el) {
      this.bScroll.scrollToElement(el)
    },

    pickCity(city) {
      this.$store.commit('setCity', city)
      this.$router.push('/')
    },

    handleTouchStart() {
      this.touch = true
    },

    handleTouchMove(e) {
      if (this.touch) {
        let clientY = e.touches[0].clientY
        let navLetterIndex = Math.floor((clientY - this.hotpoisition) / this.alphabetaHeight)
        let letterArray = Object.keys(this.cities)
        this.scrollToElement(`#${letterArray[navLetterIndex-1]}`)
      }
    },

    handleTouchEnd() {
      this.touch = false
    },
  },

  async mounted() {
    let result = await http.get({
      url: '/cities.json'
    })
    this.hotCities = result.hotCities
    this.cities = result.cities

    this.$nextTick(() => {
      this.bScroll = new BScroll('#city-list', {
        click: true
      })
      
      this.hotpoisition = this.$refs['A'][0].getBoundingClientRect()['y']
      this.alphabetaHeight = this.$refs['A'][0].offsetHeight
    })

  },
}
</script>