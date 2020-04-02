<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Contact & Link</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>info[at]tedxnagoyau.com</v-list-item-title>
                  <v-list-item-sub-title>[at]を@にしてご連絡ください。</v-list-item-sub-title>
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
      overlay: false
    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
