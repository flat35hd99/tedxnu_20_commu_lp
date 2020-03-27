<template>
  <div class="">
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
    </div>

    <div class="">
      <tedx-nagoyau></tedx-nagoyau>
    </div>

    <div class="">
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
    </div>


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

    <div>
      <please-sponsor></please-sponsor>
    </div>

    <div>
      <plan-session></plan-session>
    </div>

    <div class="">
      <past-sponsor-session></past-sponsor-session>
    </div>

    <v-container>
      <v-row>
        <v-col xs="11">
          <v-card>
            <v-card-title>developers comments</v-card-title>
            <v-card-text>
              <ul>
                <li>新歓ランディングページに使っているものは基本なんでもできます</li>
                <li><a href="https://vuetifyjs.com/ja/components/cards/">このサイト</a>に載ってることなら基本なんでもできるよ</li>
                <li>ひな形というにはお粗末だけど、とりあえず。3/19のうちに外に見せられる形にするね</li>
                <li>github pages tests</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <Contact></Contact>

    <!--<v-parallax :src="imgLink.missionView">
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
    </v-parallax>-->
  </div>

</template>

<script>
// @ is an alias to /src
import PlanSession from '@/components/PlanSession.vue'
import TedxNagoyau from '@/components/TedxNagoyau.vue'
import PleaseSponsor from '@/components/PleaseSponsor.vue'
import PastSponsorSession from '@/components/PastSponsorSession.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    PlanSession,
    TedxNagoyau,
    PleaseSponsor,
    PastSponsorSession,
    Contact
  },

  data: function () {
    return {
      imgLink: {
        firstView: 'https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg',
        missionView: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
        visionView: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

        meritView: "https://superdevresources.com/wp-content/uploads/2016/02/5-backgrounds.jpg",//danger!!!!!!!!!
        cardA: "https://live.staticflickr.com/65535/48254749996_95807209b1_c.jpg",
        cardB: "https://live.staticflickr.com/65535/48247052851_1efa58fde2_c.jpg",
        cardC: "https://live.staticflickr.com/65535/48247052991_d905b95448_c.jpg",
      }
    }
  }
}
</script>
