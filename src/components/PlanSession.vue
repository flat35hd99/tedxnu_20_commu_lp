<template >
  <v-container>
    <v-row><v-col>
      <h1 class="display-1 font-weight-thin mb-4">協賛プラン</h1>
      <p>TEDxNagoyaUにご協賛いただくにあたり、いくつかのプランをご用意させていただきました。</p>
    </v-col></v-row>
    <v-row>
      <v-col v-for="item in planList" v-bind:key="item.title" xs="12" sm="6" md="4">
        <v-card>
          <v-img :src="item.img"></v-img>
          <v-card-title>{{item.title}}</v-card-title>
          <v-card-subtitle>{{item.price}}<span v-if="item.per"> / {{item.per}}</span></v-card-subtitle>
          <v-card-text>{{item.desc}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PlanSession',
  data () {
    return {
      defaultElevation: 20,
      planList: [
        {
          title: "ロゴ掲載",
          img: 'https://live.staticflickr.com/65535/48254817982_6cd3d3b7a4_c.jpg',
          price: "2万円～",
          desc: 'TEDxNagoyaUホームページ、当日パンフレット、YouTube（イベントトーク動画（総再生回数 約36万5000回、2020/02/22時点））といった、TEDxNagoyaU2020イベントに関わる様々なところに、貴社のロゴを掲載させていただきます。',
          bool: true,
          overlay: true,
        },
        {
          title: 'サンプリング配布',
          img: 'https://live.staticflickr.com/65535/48218630792_2310204909_c.jpg',
          price: '3万円',
          desc: 'TEDxNagoyaU2020の参加者の方々にお渡しするお土産袋に、貴社のフライヤー、商品サンプル等を同梱致します。約60名の学生を含む、100名の参加者の手にお渡しいたします。',
        },
        {
          title: 'ブース出展',
          img: 'https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg',
          price: '3万円',
          desc: '祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。',
        },
        {
          title: 'パブリックビューイング参加枠',
          img: 'https://live.staticflickr.com/65535/49596709966_9554ced148_c.jpg',
          price: '2万円',
          per: '1人あたり',
          desc: '祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。',
        },
        {
          title: '当日参加枠',
          img: 'https://live.staticflickr.com/65535/49596209408_5f5556046d_c.jpg',
          price: '3万円',
          per: '1人あたり',
          desc: 'イベント及び、終了後のアフターパーティーにご参加いただけます。イベントでは、スピーカーのトークを実際に聴講していただけるだけでなく、ブレイクタイム企画やアフターパーティーにて、スピーカーや運営スタッフを含めた参加者と交流していただけます。',
        },
        {
          title: '物品協賛',
          img: 'https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg',
          price: 'ご相談ください',
          desc: 'イベント当日に参加者の方にお配りする飲み物や、スピーカーの方の宿泊施設、ステージ機材など、お金以外で本イベントへご協賛していただけるものとなっております。物品に応じて、それを金額に換算し、ロゴ掲載やサンプリング配布、イベント当日の参加枠などへと代えさせていただいております。',
        }
      ],
      imgLink: {
        test: ""
      },
    }
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
</style>
