const path = require('path');


// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('scss')
//       .use('style-resource')
//       .loader('style-resources-loader')
//       .options({
//         patterns: [
//           './src/assets/styles/*.scss',
//         ],
//       })
//   }
// };

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: `
//           @import "@/assets/styles/variables.scss";
//           @import "@/assets/styles/global.scss";
//           @import "@/assets/styles/mixins.scss";
//           @import "@/assets/styles/fonts.scss";
//         `
//       }
//     }
//   }
// };

// module.exports = {
//   chainWebpack: config => {
//     const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
//     types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
//   },
// };

// function addStyleResource (rule) {
//   rule.use('style-resource')
//     .loader('sass-loader')
//     .options({
//       includePaths: [
//         './src/assets/styles/fonts.scss',
//         './src/assets/styles/global.scss',
//         './src/assets/styles/mixins.scss',
//         './src/assets/styles/variables.scss',
//       ],
//     })
// }

// module.exports = {
//   css: {
//     loaderOptions: {
//       scss: {
//         additionalData :
//         `@import "@/assets/styles/variables.scss";`
//       },
//     }
//   }
// };

// module.exports = {
//   pluginOptions: {
//     "style-resources-loader": {
//       preProcessor: "scss",
//       patterns: [
//         "./src/assets/styles/global.scss",
//         "./src/assets/styles/variables.scss"
//       ]
//     }
//   }
// };
//
// module.exports = {
//   css: {
//     loaderOptions: {
//       scss: {
//         prependData: '@import "@/assets/styles/variables.scss";'
//       }
//     }
//   },
// };

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
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
