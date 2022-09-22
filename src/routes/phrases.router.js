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

module.exports = router