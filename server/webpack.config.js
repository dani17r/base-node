
  module.exports = {
    mode: 'none',
    entry: './client/model/js/dom.js',
    output: {
      path: '/',
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: '/\.js$/',
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: {
            presets: ["es2015"]
          }
        }
      ]
    }
  }
