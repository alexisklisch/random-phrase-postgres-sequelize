'use strict';
const { PHRASE_TABLE, PhraseSchema } = require('../models/phrase.model')

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(PHRASE_TABLE, PhraseSchema);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable(PHRASE_TABLE);
  }
};
