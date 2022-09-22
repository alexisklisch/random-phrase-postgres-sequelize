const { Phrase, PhraseSchema } = require("./phrase.model");

function setupModels(sequelize){
  Phrase.init(PhraseSchema, Phrase.config(sequelize))
}

module.exports = setupModels