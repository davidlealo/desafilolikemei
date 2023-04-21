//Importar e iniciar Express
const express = require('express')
const app = express()

//Importar funciones de consultas.js
const {leerPost, agregarPost} = require('./consultas')

//Importar cors
const cors = require('cors')

//Iniciar cors
app.use(cors())

//Iniciar MW json
app.use(express.json())

//Iniciar servidor
app.listen(3000, ()=> console.log('Servidor iniciado en el puerto 3000'))


//Función asincrona get
app.get('/posts', async (req, res) =>{
    const resultado = await leerPost()
    res.json(resultado)
})

//Agregar post
  app.post('/posts', async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    await agregarPost(titulo, url, descripcion);
    res.json();
  });