<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>昨年度協賛企業様ご芳名</v-card-title>
          <v-img :src="imgLink.pamphlet2019"></v-img>
          <v-card-text>
            <ul>
              <li v-for="item in sponsorList2019" :key="item.name">{{item.name}}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PastSponsorSession',
  data: function () {
    return {
      imgLink: {
        pamphlet2019: ''
      },
      sponsorList2019: [
        {
          name: '株式会社ジェイエスティー'
        },
        {
          name: 'サンプル会社'
        },
        {
          name: 'エグザンプル株式会社'
        },
        {
          name: '株式会社ホゲホゲ'
        },
        {
          name: '（株）hoge'
        }
      ],
    }
  },
}
</script>

<style lang="css" scoped>
</style>
