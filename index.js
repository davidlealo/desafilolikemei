//Importar e iniciar Express
const express = require('express')
const app = express()

//Importar cors
const cors = require('cors')

//Importar funciones de consultas.js
const {agregarPosts, LeerPost, leerPost} = require('./consultas')

//Iniciar cors
app.use(cors())

//Iniciar servidor
app.listen(3000, ()=> console.log('Servidor iniciado'))

//Get inicial
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

//Función asincrona get
app.get('/posts', async (req, res) =>{
    const result = await leerPost()
    res.json(result)
})

app.post()
