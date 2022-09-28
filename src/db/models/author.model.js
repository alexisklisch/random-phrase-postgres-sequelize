const { Model, DataTypes, Sequelize } = require('sequelize')

const AUTHOR_TABLE = 'authors'

const AuthorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: true,
    defaultValue: 'Anónimo',
    type: DataTypes.STRING
  }
}

class Author extends Model{
  static associate(){
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: AUTHOR_TABLE,
      modelName: 'Author',
      timestamps: false
    }
  }
}

module.exports = { AUTHOR_TABLE, AuthorSchema, Author }