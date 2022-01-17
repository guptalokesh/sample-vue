const webpack = require('webpack');

module.exports = {
  filenameHashing: true,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        const modifiedOptions = options;
        modifiedOptions.prettify = false;
        return modifiedOptions;
      });
  },

  configureWebpack: {
    devtool: false,
    // devtool: 'source-map',
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
      }),
    ],
  },
  publicPath: '',
  pages: {
    dashboard: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Dashboard',
      // chunks: ['chunk-vendors', 'chunck-common', 'dashboard'],
    },
  },
  pwa: {
    name: `${process.env.VUE_APP_NAME}`,
    themeColor: '#ffffff',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    workboxOptions: {
      // skipWaiting: true,
    },
  },
};
