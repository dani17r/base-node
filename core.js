import express from 'express'
import nunjucks from 'nunjucks'
import webpack from 'webpack'
import webpackConfig from './server/webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import router from './server/routes/routes'

let app = express()

app.use(webpackDevMiddleware(webpack(webpackConfig)))

app.use(express.static(__dirname + '/client'))
app.set('view engine', 'nunjucks')

nunjucks.configure('./client/views', {
  autoescape: true,
  express: app
})

app.use(router)


app.listen(3000)

  // "babel-cli": "^6.26.0",
  // "babel-loader": "^8.0.2",
  // "babel-preset-es2015": "^6.24.1",
  // "express": "^4.16.3",
  // "jquery": "^3.3.1",
  // "nodemon": "^1.18.4",
  // "nunjucks": "^3.1.3",
  // "webpack": "^4.17.2",
  // "webpack-cli": "^3.1.0",
  // "webpack-dev-middleware": "^3.2.0",
  // "webpack-dev-server": "^3.1.14"
