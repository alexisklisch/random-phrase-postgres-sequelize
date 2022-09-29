const sequelize = require("../libs/sequelize")
const { models } = require("../libs/sequelize")

class PhrasesService{

  async getAllPhrases(){
    const rta = await models.Phrase.findAll({
      include: ['author']
    })
    return rta
  }

  async getRandomPhrase(){
    const rta = await models.Phrase.findOne({
      order: sequelize.random()
    })
    return rta
  }

  async getPhrase(id){
    const phrase = await models.Phrase.findByPk(id)
    if(!phrase){
      return {error: 'Ésta frase no existe'}
    }
    return phrase
  }
  
  async createPhrase(data){
    const newPhrase = await models.Phrase.create(data)
    return newPhrase
  }

  async updatePhrase(id, data){
    const phrase = await this.getPhrase(id)
    const updatedPhrase = await phrase.update(data)
    return updatedPhrase
  }

  async deletePhrase(id){
    const phrase = await this.getPhrase(id)
    await phrase.destroy()

    return { id }
  }

}

module.exports = PhrasesService