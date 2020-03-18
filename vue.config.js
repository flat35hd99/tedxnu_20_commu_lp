module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === '/tedxnu_20_commu_lp/'
    ? '/tedxnu_20_commu_lp'
    : './',
  outputDir: 'docs'
}
