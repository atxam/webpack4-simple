var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // плагин для загрузки кода Vue

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // это будет применяться к файлам `.js`
      // А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // это будет применяться к файлам `.css`
      // А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }

    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  plugins: [
    // убедитесь что подключили плагин!
    new VueLoaderPlugin()
  ]



}
