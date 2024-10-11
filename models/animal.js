const { Schema } = require('mongoose')

const Animal = new Schema(
    {
        name: { type: String, required: true },  
        scientificName: { type: String, required: true }, 
        region: { type: String, required: true },
        imageUrl: { type: String, required: true }, 
        lifeSpan: { type: String, required: true },
        diet: { type: String, required: true },
        habitat: { type: String, required: true },
        type: { type: Schema.Types.ObjectId, ref: 'Type' }


    },
    { timestamps: true },
)

module.exports =  Animal