<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Contact & Link</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="item in addressList" :key="item.title">
                <v-list-item-icon>
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{item.title}}</v-list-item-title>
                  <v-list-item-sub-title>{{item.subTitle}}</v-list-item-sub-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data:function(){
    return {
      overlay: false,
      addressList: [
        {
          title: 'info[at]tedxnagoyau.com',
          icon: 'mdi-email',
          subTitle: '[at]を@にしてご連絡ください。'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
