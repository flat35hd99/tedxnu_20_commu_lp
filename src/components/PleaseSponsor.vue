<template>
  <v-parallax src="/img/21.jpg" :height="parallaxHeight">
    <v-container>
      <v-row align="center">
        <v-col xs="12" class="text-center">
          <h1 class="display-1 font-weight-thin mb-4">協賛のお願い</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="" cols="12" sm="6" md="6">
          <h2>協賛金の使途</h2>
          <p>祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</p>
        </v-col>
        <v-col class="" cols="12" sm="6" md="6">
          <h2>理念に共感</h2>
          <p>祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</p>
        </v-col>
        <v-col class="" cols="12" sm="6" md="6">
          <h2>協賛していただくメリット</h2>
          <p>祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</p>
        </v-col>
        <v-col class="" cols="12" sm="6" md="6">
          <h2>協賛の形</h2>
          <p>協賛プランのご紹介です。祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</p>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'PleaseSponsor',
  data: function () {
    return {
      width: window.innerWidth,
      parallaxHeight: 500,
    }
  },
  methods: {
    handleResize: function() {
      this.width = window.innerWidth;
      if (this.width < 400) {
        this.parallaxHeight = 1100
      }else if (this.width < 500 ) {
        this.parallaxHeight = 1000
      }else if (this.width < 599) {
        this.parallaxHeight = 900
      }else if (this.width < 800) {
        this.parallaxHeight = 800
      }else{
        this.parallaxHeight = 500
      }
    }
  },
  created: function () {
    if (this.width < 400) {
      this.parallaxHeight = 1100
    }else if (this.width < 500 ) {
      this.parallaxHeight = 1000
    }else if (this.width < 599) {
      this.parallaxHeight = 900
    }else if (this.width < 800) {
      this.parallaxHeight = 800
    }else{
      this.parallaxHeight = 500
    }
  },
  /*mounted: function () {
    window.addEventListener('resize',this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize',this.handleResize)
  }*/
}
</script>

<style lang="css" scoped>
</style>
