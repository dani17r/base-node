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
