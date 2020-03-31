<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-img :src="imgLink.logoPartner"></v-img>
          <v-card-title>昨年度協賛企業様ご芳名</v-card-title>
          <v-card-text>
            <span>通常の協賛</span>
            <ul>
              <li v-for="item in sponsorList2019normal" :key="item.name">{{item.name}} 様</li>
            </ul>
            <span>物品協賛</span>
            <ul>
              <li v-for="item in sponsorList2019material" :key="item.name">{{item.name}} 様</li>
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
        logoPartner: ''
      },
      sponsorList2019normal: [
        {
          name: '大同特殊鋼株式会社'
        },
        {
          name: '株式会社イエス'
        },
        {
          name: 'アビームシステムズ株式会社'
        },
        {
          name: 'EF Education Firs'
        },
        {
          name: '株式会社キャディッシュ'
        },
        {
          name: '中京テレビ放送株式会社'
        },
        {
          name: '株式会社Harmony For'
        },
        {
          name: '株式会社イノベスト'
        },
        {
          name: '株式会社コーチング・システムズ'
        },
        {
          name: '株式会社ジェイエスティ'
        },
      ],
      sponsorList2019material: [
        {
          name: '株式会社シーマ'
        },
        {
          name: 'Peatix Japan株式会社'
        },
        {
          name: '磯田園製茶株式会社'
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
</style>
