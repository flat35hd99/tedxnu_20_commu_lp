<template>
  <v-container>
    <section>
      <v-parallax :src="imgLink.firstView" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1
              class="white--text mb-2 display-1 text-xs-center"
            >キャッチコピー募集！
          </h1>
          <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000; border-bottom: solid 2px red;"
            >サブタイトルください！！</div>
        </v-layout>
      </v-parallax>
    </section>
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  },
  data: function () {
    return {
      imgLink: {
        firstView: 'https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg',
      }
    }
  }
}
</script>
