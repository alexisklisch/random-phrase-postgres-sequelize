const express = require('express')

const phrasesRouter = require('./phrases.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/v1', router)

  router.use('/phrases', phrasesRouter)
}

module.exports = routerApi