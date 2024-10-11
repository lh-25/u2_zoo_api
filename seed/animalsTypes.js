const db = require('../db')
const { Animal, Type } = require('../models')

db.on('error', console.error.bind(console, 'Mongodb connection error'))

const main = async () => {
    const type1 = await new Type({
        typeName: "Reptile",
        hasFur: false,
        hasScales: true,
        hasBones: true,
        isWarmBlooded: false,
        canFly: false,
        laysEggs: true,
    })
    type1.save()

    const type2 = await new Type({
        typeName: "Mammal",
        hasFur: true,
        hasScales: false,
        hasBones: true,
        isWarmBlooded: true,
        canFly: false,
        laysEggs: false,
    })
    type2.save()

    const type3 = await new Type({
        typeName: "Bird",
        hasFur: false,
        hasScales: false,
        hasBones: true,
        isWarmBlooded: true,
        canFly: true,
        laysEggs: true,
    })
    type3.save()

    const animals = [
        {
            name: "Green Iguana",
            scientificName: "Iguana iguana",
            region: "Central and South America",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTY_IxjpLjVmlMbNJ2XAlLtL0pF2DoBjXQhg&s",
            lifeSpan: "15-20 years",
            diet: "Herbivore (leaves, flowers, and fruit)",
            habitat: "Tropical rainforests, trees near water",
            type: type1._id
        },
        {
            name: "Komodo Dragon",
            scientificName: "Varanus komodoensis",
            region: "Indonesian islands of Komodo, Rinca, Flores, and Gili Motang",
            imageUrl: "https://cdn.britannica.com/79/165579-138-27764E9E/Komodo-dragons-handful-Indonesia-Lesser-Sunda-Islands.jpg?w=800&h=450&c=crop",
            lifeSpan: "30 years",
            diet: "Carnivore (deer, pigs, water buffalo)",
            habitat: "Savannahs, forests, and grasslands",
            type: type1._id
        },
        {
            name: "Leatherback Sea Turtle",
            scientificName: "Dermochelys coriacea",
            region: "Worldwide in tropical and subtropical oceans",
            imageUrl: "https://californiadiver.com/wp-content/uploads/2015/07/leatherback-sea-turtle-dp.jpg",
            lifeSpan: "45-50 years",
            diet: "Carnivore (jellyfish and soft-bodied sea creatures)",
            habitat: "Oceans and coastal areas",
            type: type1._id
        },
        {
            name: "African Elephant",
            scientificName: "Loxodonta africana",
            region: "Sub-Saharan Africa",
            imageUrl: "https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png",
            lifeSpan: "60-70 years",
            diet: "Herbivore (grass, leaves, fruits)",
            habitat: "Savannahs, forests, and deserts",
            type: type2._id
        },
        {
            name: "Gray Wolf",
            scientificName: "Canis lupus",
            region: "North America, Europe, Asia",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKHKbj64_XON60qJ23Ia5cHg_0Jqzc4WvHg&s",
            lifeSpan: "6-8 years in the wild",
            diet: "Carnivore (deer, elk, small mammals)",
            habitat: "Forests, tundra, grasslands, mountains",
            type: type2._id
        },
        {
            name: "Koala",
            scientificName: "Phascolarctos cinereus",
            region: "Eastern and Southeastern Australia",
            imageUrl: "https://images.fineartamerica.com/images-medium-large-5/1-koala-phascolarctos-cinereus-animal-images.jpg",
            lifeSpan: "13-18 years",
            diet: "Herbivore (eucalyptus leaves)",
            habitat: "Eucalyptus forests",
            type: type2._id
        },

        {
            name: "Bald Eagle",
            scientificName: "Haliaeetus leucocephalus",
            region: "North America",
            imageUrl: "https://observation.org/media/photo/506157.jpg",
            lifeSpan: "20-30 years",
            diet: "Carnivore (fish, small mammals, birds)",
            habitat: "Near water, lakes, rivers, coasts",
            type: type3._id
        },
        {
            name: "Emperor Penguin",
            scientificName: "Aptenodytes forsteri",
            region: "Antarctica",
            imageUrl: "https://www.giraffa.co/wp-content/uploads/2019/11/Emperor-Penguin-Aptenodytes-forsteri-Giraffa-Christopher-Michel-3-1.jpg",
            lifeSpan: "15-20 years",
            diet: "Carnivore (fish, squid, krill)",
            habitat: "Antarctic ice and waters",
            type: type3._id
        },
        {
            name: "Scarlet Macaw",
            scientificName: "Ara macao",
            region: "Central and South America",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ara_Macao_%28Yarinacocha%2C_Pucallpa%29.jpg/1200px-Ara_Macao_%28Yarinacocha%2C_Pucallpa%29.jpg",
            lifeSpan: "40-50 years",
            diet: "Herbivore (fruits, nuts, seeds)",
            habitat: "Tropical rainforests",
            type: type3._id
        }
    ]
    await Animal.insertMany(animals)
    console.log('Created some animals!')
}

const run = async () => {
    await main()
    db.close
}

run()