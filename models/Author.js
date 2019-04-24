const mongoose = require('../db/connection')
const Schema = mongoose.Schema

// initialize the schema with a configuration object
const Author = new Schema({
  // firstName, lastName, and cookbooks are our properties
  firstName: String,
  lastName: String,
  cookbooks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Cookbook'
      // ref means reference another model. In this case it's called Cookbook
    }
  ]
})

module.exports = mongoose.model('Author', Author)
