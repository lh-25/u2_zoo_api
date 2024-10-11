const mongoose = require('mongoose')
const AnimalSchema = require('./animal')
const TypeSchema = require('./type')

const Animal = mongoose.model('Animal', AnimalSchema)
const Type = mongoose.model('Type', TypeSchema)
module.exports = {
    Animal,
    Type
}