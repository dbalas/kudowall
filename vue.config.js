module.exports = {
  configureWebpack: {
    entry: [
      'babel-polyfill',
      './src/main.js',
    ],
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
