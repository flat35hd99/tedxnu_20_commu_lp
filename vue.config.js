module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tedxnu_20_commu_lp/'
    : './',
  outputDir: 'docs'
}
