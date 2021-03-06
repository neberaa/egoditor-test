const path = require('path');

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'QR Codes for Business | QR Code Generator';
        return args
      })
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/fonts.scss'),
        path.resolve(__dirname, './src/assets/styles/mixins.scss'),
        path.resolve(__dirname, './src/assets/styles/variables.scss')
      ],
    })
}
