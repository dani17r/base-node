//modulos importados
import $ from 'jquery'
import express from 'express'
import nunjucks from 'nunjucks'
import datos from '../models/database'
import dom from '../../client/model/js/dom'
dom
//Declaraciones
let router = express.Router()

  router.get('/', (req, res, next) => {
    var render = res.render('index.njk', datos)
    return render
  })

export default router
