<template>
  <section class="topbar">
    <div class="white-bg topbar-bg">
      <div class="city-entry" @click="handleClick">
        <span class="city-name">{{city}}</span><i class="city-entry-arrow"></i>
      </div>
      
      <div class="switch-hot">
        <router-link tag="div" to="/movies/intheater" active-class="active" class="hot-item">正在热映</router-link>
        <router-link tag="div" to="/movies/comingsoon" active-class="active" class="hot-item">即将上映</router-link>
      </div>

      <div class="search-entry search-icon"></div>
      
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  },

  methods: {
    handleClick() {
      this.$router.push('/city')
    }
  },
}
</script>

<style lang="stylus">
@import '~@/assets/styles/border'
.topbar
  height .44rem
  background #fff
  border_1px(0 0 1px 0)
  position relative
  z-index 1100
  > div
    display flex
    .city-entry
      flex 80
      display flex
      align-items center
      padding-left .15rem
      color #666
      .city-entry-arrow
        margin-right 5px
        width 0
        height 0
        border 4px solid #b0b0b0
        border-left-color transparent
        border-right-color transparent
        border-bottom-color transparent
        display inline-block
        margin-left 4px
        margin-top 5px
    .switch-hot
      flex 215
      display flex
      height 100%
      .hot-item
        flex 1
        margin 0 .1rem
        height 100%
        text-align center
        line-height .44rem
        color #666
        &.active
          color #ef4238
          border_1px(0 0 5px 0, #ef4238)
          &:after
            z-index 1000
            top -2px
          box-sizing border-box

      &:after
        display none !important

    .search-entry
      flex 80
      padding-right .15rem
      background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII=') no-repeat
      background-position center right
      background-origin content-box
      background-size 20px 20px

</style>