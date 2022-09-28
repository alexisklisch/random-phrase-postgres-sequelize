const express = require('express')

const phrasesRouter = require('./phrases.router')
const authorsRouter = require('./authors.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/v1', router)

  router.use('/phrases', phrasesRouter)
  router.use('/authors', authorsRouter)
}

module.exports = routerApi