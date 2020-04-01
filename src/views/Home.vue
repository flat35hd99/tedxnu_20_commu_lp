<template>
  <div class="">
    <div class="">
      <v-parallax :src="imgLink.firstView" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1
              class="white--text mb-2 display-1 text-xs-center"
            >協賛企業募集
          </h1>
          <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000; border-bottom: solid 2px red;"
            >理念に共感し、応援してくださる方々を探しています。</div>
        </v-layout>
      </v-parallax>
    </div>

    <div class="">
      <tedx-nagoyau></tedx-nagoyau>
    </div>

    <div>
      <mission-vision-session></mission-vision-session>
    </div>

    <div>
      <please-sponsor></please-sponsor>
    </div>

    <div>
      <plan-session></plan-session>
    </div>

    <div class="">
      <past-sponsor-session></past-sponsor-session>
    </div>

    <Contact></Contact>

  </div>

</template>

<script>
// @ is an alias to /src
import MissionVisionSession from '@/components/MissionVisionSession.vue'
import PlanSession from '@/components/PlanSession.vue'
import TedxNagoyau from '@/components/TedxNagoyau.vue'
import PleaseSponsor from '@/components/PleaseSponsor.vue'
import PastSponsorSession from '@/components/PastSponsorSession.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    MissionVisionSession,
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
  },
  mounted: function () {
    const title = '協賛のお願い | TEDxNagoyaU'
    const description = 'TEDxNagoyaUは名古屋大学でTEDxイベントを運営する学生のみで構成されたイベント運営団体です。'
    document.title = title
    document.querySelector("meta[property='og:title']")
      .setAttribute('content', title)
    document.querySelector("meta[name='description']")
      .setAttribute('content', description)
    document.querySelector("meta[property='og:description']")
      .setAttribute('content', description)
  }
}
</script>
