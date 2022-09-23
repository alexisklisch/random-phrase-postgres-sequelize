const express = require('express')
const cors = require('cors')
const config = require('./config.js')
const routerApi = require('./routes/index.js')


const app = express()


app.use(cors())
app.use(express.json())

routerApi(app)

app.listen( config.port, () => {
  console.log(`🚀 Funcionando en el puerto ${config.port}`)
})