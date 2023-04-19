//Importar e iniciar Express
const express = require('express')
const app = express()

//Importar funciones de consultas.js
const {agregarPosts, LeerPost} = require('./consultas')

//Iniciar servidor
app.listen(3000, ()=> console.log('Servidor iniciado'))
