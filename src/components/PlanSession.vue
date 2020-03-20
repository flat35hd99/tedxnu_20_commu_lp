<template >
  <v-container>
    <v-row><v-col>
      <h1 class="display-1 font-weight-thin mb-4">協賛プラン</h1>
    </v-col></v-row>
    <v-row>
      <v-col v-for="item in planList" :key="item.title" xs="12" sm="6" md="4">
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
  data: function () {
    return {
      planList: [
        {
          title: "ロゴ掲載",
          img: 'https://live.staticflickr.com/65535/48254817982_6cd3d3b7a4_c.jpg',
          price: "2万円～",
          desc: '祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。'
        },
        {
          title: 'サンプリング配布',
          img: 'https://live.staticflickr.com/65535/48218630792_2310204909_c.jpg',
          price: '3万円',
          desc: '祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。'
        },
        {
          title: 'ブース出展',
          img: 'https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg',
          price: '3万円',
          desc: '祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。'
        },
        {
          title: 'パブリックビューイング参加枠',
          img: 'https://live.staticflickr.com/65535/49596709966_9554ced148_c.jpg',
          price: '2万円',
          per: '1人あたり',
          desc: '祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。'
        },
        {
          title: '当日参加枠',
          img: 'https://live.staticflickr.com/65535/49596709966_9554ced148_c.jpg',
          price: '3万円',
          per: '1人あたり',
          desc: '祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。'
        },
        {
          title: '物品協賛',
          img: 'https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg',
          price: 'ご相談ください',
          desc: '祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。'
        }
      ],
      imgLink: {
        test: ""
      },
    }
  },
}
</script>

<style lang="css" scoped>
</style>
