<template>
  <div class="">
    <v-parallax :src="imgLink.firstView" height="600">
      <v-layout column align-center justify-center class="white--text">
        <h1
            class="white--text mb-2 display-1 text-xs-center"
          >キャッチコピー募集！
        </h1>
        <div
            class="white--text subheading mb-3 text-xs-center"
            style="font-weight: 900; text-shadow: 2px 2px #000000; border-bottom: solid 2px red;"
          >サブタイトルください！！背景もほしい！</div>
      </v-layout>
    </v-parallax>

    <v-parallax :src="imgLink.missionView">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Mission</h1>
          <h4 class="subheading">Missionをここに書くよ。このフォントかっこいいね</h4>
          <p>ちなみにフォントも無料のだったらいろいろ変えることができるよ</p>
          <p>今背景に使っているのはマテリアルデザインといって、なんかモダンな雰囲気を感じるよね。</p>
          <p></p>
        </v-col>
      </v-row>
    </v-parallax>

    <v-parallax :src="imgLink.visionView">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Vision</h1>
          <!--<h4 class="subheading">Visionをここに書くよ！ちなみに</h4>-->
          <p class="subheading">Visionをここに書くよ！ちなみに<br>改行したりいろいろ自由にできるよ<br><br>ご覧の通り、行間を空けることも</p>
          <p style="color: #000000;">色を変えたりすることもできるぞ！</p>
          <p>いろいろ指定してくれると嬉しいのだ！</p>
        </v-col>
      </v-row>
    </v-parallax>

    <v-parallax :src="imgLink.missionView">
      <v-container>
        <v-row >
          <v-col class="" xs="12" sm="6" md="4">
            <v-card>
              <v-img :src="imgLink.cardA" alt=""></v-img>
              <v-card-title>画質改善。イベント紹介する？</v-card-title>
              <v-card-text>これは複数の情報を一斉に見せるのに適していそうだね！具体的には協賛プランを表示したり、協賛のメリットを示すのに適しているのではないかな？</v-card-text>
            </v-card>
          </v-col>
          <v-col class="" xs="12" sm="6" md="4">
            <v-card>
              <v-img :src="imgLink.cardA" alt=""></v-img>
              <v-card-title>画質改善。イベント紹介する？</v-card-title>
              <v-card-text>これは複数の情報を一斉に見せるのに適していそうだね！具体的には協賛プランを表示したり、協賛のメリットを示すのに適しているのではないかな？</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>


    <v-parallax :src="imgLink.firstView">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center">
            <h1 class="display-1 font-weight-thin mb-4">メリット</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="" xs="12" sm="12" md="6">
            <v-card>
              <v-card-title>メリットの紹介①</v-card-title>
              <v-card-text>祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</v-card-text>
            </v-card>
          </v-col>
          <v-col class="" xs="12" sm="12" md="6">
            <v-card>
              <v-card-title>メリットのご紹介②</v-card-title>
              <v-card-text>祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>閑話休題</v-card-title>
            <v-card-text>不意に真っ白背景にしてインパクトのあることを伝えることもできるよね</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-parallax :src="imgLink.planView">
      <v-container>
        <v-row align="center" justify="center">
          <v-col xs="12" class="text-center">
            <h1 class="display-1 font-weight-thin mb-4">協賛プランのご紹介</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="" xs="12" sm="12" md="6">
            <h2>協賛プランの紹介①</h2>
            <p>協賛プランのご紹介です。祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</p>
          </v-col>
          <v-col class="" xs="12" sm="12" md="6">
            <h2>協賛プランの紹介②</h2>
            <p>協賛プランのご紹介です。祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</p>
          </v-col>
          <v-col class="" xs="12" sm="12" md="6">
            <h2>協賛プランの紹介3</h2>
            <p>協賛プランのご紹介です。祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</p>
          </v-col>
          <v-col class="" xs="12" sm="12" md="6">
            <h2>協賛プランの紹介４</h2>
            <p>協賛プランのご紹介です。祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。</p>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

    <div>
      <plan-session></plan-session>
    </div>


    <v-container>
      <v-row>
        <v-col xs="11">
          <v-card>
            <v-card-title>others</v-card-title>
            <v-card-text>
              <ul>
                <li>新歓ランディングページに使っているものは基本なんでもできます</li>
                <li><a href="https://vuetifyjs.com/ja/components/cards/">このサイト</a>に載ってることなら基本なんでもできるよ</li>
                <li>ひな形というにはお粗末だけど、とりあえず。3/19のうちに外に見せられる形にするね</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
// @ is an alias to /src
import PlanSession from '@/components/PlanSession.vue'

export default {
  name: 'Home',
  components: {
    PlanSession
  },

  data: function () {
    return {
      imgLink: {
        firstView: 'https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg',
        missionView: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
        visionView: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        planView: "https://superdevresources.com/wp-content/uploads/2016/02/40-backgrounds-material.jpg",//danger!!!!!!!!!!!!!
        meritView: "https://superdevresources.com/wp-content/uploads/2016/02/5-backgrounds.jpg",//danger!!!!!!!!!
        cardA: "https://live.staticflickr.com/65535/48254749996_95807209b1_c.jpg",
        cardB: "https://live.staticflickr.com/65535/48247052851_1efa58fde2_c.jpg",
        cardC: "https://live.staticflickr.com/65535/48247052991_d905b95448_c.jpg",
      }
    }
  }
}
</script>
