const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Cookbook = new Schema({
  title: String,
  yearPublished: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
})

module.exports = mongoose.model('Cookbook', Cookbook)
