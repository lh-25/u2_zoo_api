const { Schema } = require('mongoose')

const Type = new Schema(
    {
      typeName: { type: String, required: true }, 
      hasFur: { type: Boolean, required: true },
        hasScales: { type: Boolean, required: true },
        hasBones: { type: Boolean, required: true },
        isWarmBlooded: { type: Boolean, required: true },
        canFly: { type: Boolean, required: true },
        laysEggs: { type: Boolean, required: true }, 
    },
    { timestamps: true } 
  )
  module.exports = Type