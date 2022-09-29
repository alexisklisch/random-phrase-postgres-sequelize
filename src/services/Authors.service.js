const sequelize = require("../libs/sequelize")
const { models } = require("../libs/sequelize")

class AuthorsService{

  async getAllAuthors(){
    const rta = await models.Author.findAll({
      include: ['phrase']
    })
    return rta
  }

  async getRandomAuthor(){
    const rta = await models.Author.findOne({
      order: sequelize.random()
    })
    return rta
  }

  async getAuthor(id){
    const author = await models.Author.findByPk(id)
    if(!author){
      return {error: 'Ésta frase no existe'}
    }
    return author
  }
  
  async createAuthor(data){
    const newAuthor = await models.Author.create(data, {
      include: ['phrase']
    })
    return newAuthor
  }

  async updateAuthor(id, data){
    const Author = await this.getAuthor(id)
    const updatedAuthor = await Author.update(data)
    return updatedAuthor
  }

  async deleteAuthor(id){
    const author = await this.getAuthor(id)
    await author.destroy()

    return { id }
  }

}

module.exports = AuthorsService