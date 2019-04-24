const mongoose = require('../models/Author.js')
const Author = mongoose.model('Author')
const data = require('./data.json')

Author.remove({})
  .then(_ => {
    Author.collection.insert(data)
      .then(authors => {
        console.log(data)
        process.exit()
      })
      .catch(err => {
        console.log(err)
      })
  })
