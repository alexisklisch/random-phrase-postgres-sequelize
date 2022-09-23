const express = require('express')

const PhrasesService = require('../services/Phrases.service')
const phrasesService = new PhrasesService

const router = express.Router()

// Get all phrases
router.get('/', async (req, res) => {
  const phrases = await phrasesService.getAllPhrases()
  console.log(phrases)
  res.json(phrases)
})

// Get one phrase
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const phrase = await phrasesService.getPhrase(id)
  res.json(phrase)
})

// Get random phrase
router.get('/random', async (req, res) => {
  const phrase = await phrasesService.getRandomPhrase()
  res.json({phrase})
})

// Post phrase
router.post('/', async (req, res) => {
  const datos = req.body
  await phrasesService.createPhrase(datos)
  res.json({
    message: "Created succesfully",
    data: datos
  })
})

// Patch phrase
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const datos = req.body
  await phrasesService.updatePhrase(id, datos)
  res.json({
    message: "Updated succesfully",
    data: datos
  })
})

// Delete phrase
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await phrasesService.deletePhrase(id)
  res.json({
    message: "Deleted succesfully",
    id: id
  })
})

module.exports = router