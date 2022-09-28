const express = require('express')

const AuthorsService = require('../services/Authors.service')
const authorsService = new AuthorsService

const router = express.Router()

// Get all Authors
router.get('/', async (req, res) => {
  const authors = await authorsService.getAllAuthors()
  res.json(authors)
})

// Get random phrase
router.get('/random', async (req, res) => {
  const authors = await authorsService.getRandomAuthor()
  res.json(authors)
})

// Get one phrase
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const phrase = await authorsService.getAuthor(id)
  res.json(phrase)
})

// Post phrase
router.post('/', async (req, res) => {
  const datos = req.body
  await authorsService.createAuthor(datos)
  res.json({
    message: "Created succesfully",
    data: datos
  })
})

// Patch phrase
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const datos = req.body
  await authorsService.updateAuthor(id, datos)
  res.json({
    message: "Updated succesfully",
    data: datos
  })
})

// Delete phrase
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await authorsService.deleteAuthor(id)
  res.json({
    message: "Deleted succesfully",
    id: id
  })
})

module.exports = router