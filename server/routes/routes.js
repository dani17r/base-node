//modulos importados
import express from 'express'
import nunjucks from 'nunjucks'
import datos from '../models/database'

//Declaraciones
let router = express.Router()

  router.get('/', (req, res, next) => {
    var render = res.render('index.njk', datos)
    return render
  })

export default router
