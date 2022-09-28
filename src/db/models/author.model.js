const { Model, DataTypes, Sequelize } = require('sequelize')
const { PHRASE_TABLE } = require('./phrase.model')

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
  },
  // Added the phrase id columns
  phraseID: {
    field: 'phrase_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: true,
    // The reference that joins the tables
    references: {
      model: PHRASE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

class Author extends Model{
  // I use associate function to create relations
  static associate(models){
    // Every author HAS ONE phrase
    // Can contain an alias (as:xxx)
    this.hasOne(models.Phrase, {as: 'phrase', foreignKey:'phraseId'})
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