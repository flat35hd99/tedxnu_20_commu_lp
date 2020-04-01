<template>
  <v-parallax src="img/21.jpg" :height="parallaxHeight">
    <v-container>
      <v-row align="center">
        <v-col xs="12" class="text-center">
          <h1 class="display-1 font-weight-thin mb-4">協賛のお願い</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6" v-for="item in messageFromTeam" :key="item.title">
          <h2>{{item.title}}</h2>
          <p>{{item.body}}</p>
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
      messageFromTeam: [
        {
          title: '協賛金の使途',
          body: 'スピーカーさんの交通費や会場装飾、アフターパーティーの食事などに当てられます。これらの費用など、本番イベントを開催するには約100万円が必要です。'
        },
        {
          title: '協賛していただくメリット',
          body: '弊団体にご協賛していただくことで、ロゴ掲載やサンプリング配布といった手段を用いた宣伝効果が期待できます。その上、TEDxNagoyaUのイベントは、高い理想や価値観を持った学生と多く出会える場となっておりますので、今の優秀な学生が何を考え、どのように行動しているのかを把握することができます。'
        },
        {
          title: '理念に共感',
          body: 'TEDxNagoyaUのイベントは毎回テーマが設定されます。このテーマは社会に関する問題意識や、皆が普段当たり前と思っていることを見直すといった鋭い視点が反映されております。このテーマに共感していただくことは、貴社の理想や目標を達成することの一助となりえます。'
        },
        {
          title: '協賛の形',
          body: '協賛の形としては、ロゴ掲載、サンプリング配布、ブース出展、当日参加枠、パブリックビューイング参加枠、物品協賛がございます。各項目の詳細は下記に説明がございます。'
        }
      ],
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
