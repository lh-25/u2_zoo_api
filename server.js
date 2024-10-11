const express = require('express');
const db = require('./db');
const animalController = require('./controllers/animalController')
const typeController = require('./controllers/typeController')
const bodyParser = require('body-parser')
const logger = require('morgan')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
app.get('/', (req, res) => res.send('welcome to our page'))

//ANIMALS
app.get('/animals', animalController.getAllAnimals)
app.get('/animals/:id', animalController.getAnimalById)
// CREATE will nee to be in a INDEX route
app.post('/animals', animalController.createAnimal)
// PUT and DELETE will need to be iin a SHOW route bc we are targeting a single item 
app.put('/animals/:id', animalController.updateAnimal)
app.delete('/animals/:id', animalController.deleteAnimal)

//TYPES
app.get('/types', typeController.getAllTypes)
app.get('/types/:id', typeController.getTypeById)
// CREATE will nee to be in a INDEX route
app.post('/types', typeController.createType)
// PUT and DELETE will need to be iin a SHOW route bc we are targeting a single item 
app.put('/types/:id', typeController.updateType)
app.delete('/types/:id', typeController.deleteType)