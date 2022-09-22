const { models } = require("../libs/sequelize")

class PhrasesService{

  async getAllPhrases(){
    const rta = await models.Phrase.findAll()
    return rta
  }

  async getPhrase(id){
    const phrase = await models.Phrase.findByPk(id)
    if(!phrase){
      return {error: 'Ésta frase no existe'}
    }

    return phrase
  }

}

module.exports = PhrasesService