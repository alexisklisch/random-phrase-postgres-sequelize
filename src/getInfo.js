const { models } = require('./libs/sequelize')

// Función que trae datos
const getPeople = async() => {
	// También podemos generar un query "a mano"
    const rta = await models.Phrase.findAll()
    console.log(rta);
}
getPeople()