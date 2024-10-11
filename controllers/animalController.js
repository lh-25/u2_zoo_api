const {Animal} = require('../models')

// GET Index
const getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find()
        res.json(animals)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// GET Show
const getAnimalById = async (req, res) => {
    try {
        const { id } = req.params
        const animal = await Animal.findById(id)
        if (animal) {
            return res.json(animal)
        }
        return res.status(404).send('Animal with the specified ID does not exists')

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// POST -> Create
const createAnimal = async (req, res) => {
    try {
        const animal = await new Animal(req.body)
        await animal.save()
        return res.status(201).json({ animal })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// PUT -> Update 
const updateAnimal = async (req, res) => {
    try {
        let { id } = req.params;
        let animal = await Animal.findByIdAndUpdate(id, req.body, { new: true })
        if (animal) {
            return res.status(200).json(animal)
        }
        throw new Error("Animal not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE -> Delete 
const deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Animal.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Animal deleted");
        }
        throw new Error("Animal not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllAnimals,
    getAnimalById,
    createAnimal,
    updateAnimal,
    deleteAnimal

}