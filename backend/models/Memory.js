const mongoose = require("mongoose")

const memorySchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  }

})

const Memory = mongoose.model("Memory", memorySchema)

module.exports = Memory