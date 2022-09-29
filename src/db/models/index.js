const { Phrase, PhraseSchema } = require("./phrase.model");
const { Author, AuthorSchema } = require("./author.model");

function setupModels(sequelize){
  Phrase.init(PhraseSchema, Phrase.config(sequelize))
  Author.init(AuthorSchema, Author.config(sequelize))

  Phrase.associate(sequelize.models)
  Author.associate(sequelize.models)
}

module.exports = setupModels