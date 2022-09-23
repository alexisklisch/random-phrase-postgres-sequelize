const { Model, DataTypes, Sequelize } = require('sequelize')

const PHRASE_TABLE = 'phrases'

const PhraseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  phrase: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  author: {
    allowNull: true,
    defaultValue: 'Anónimo',
    type: DataTypes.STRING
  },
}

class Phrase extends Model{
  static associate(){
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PHRASE_TABLE,
      modelName: 'Phrase',
      timestamps: false
    }
  }
}

module.exports = { PHRASE_TABLE, PhraseSchema, Phrase }