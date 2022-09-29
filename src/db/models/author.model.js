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
  /* Added the phrase id columns
  The name want this format: textId*/
  phraseId: {
    field: 'phrase_id',
    allowNull: false,
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
  static associate(models){
    this.belongsTo(models.Phrase, {as: 'phrase'})
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