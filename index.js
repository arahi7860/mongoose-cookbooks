const Author = require('./models/author')

Author.find({})
  .then(authorResult => {
    console.log(authorResult)
  })

Author.find({ firstName: 'Meera' })
  .then(authorResult => {
    console.log(authorResult)
  })

Author.findOne({ firstName: 'Wes' })
  .then(authorResult => {
    console.log(authorResult)
  })

Author.findOne({ lastName: 'Roman' })
  .then(authorResult => {
    console.log(authorResult)
  })

Author.create({
  firstName: 'Ina',
  lastName: 'Garden'
}).then(authorResult => {
  Author.findOne({ firstName: 'Ina' })
    .then(author => {
      author.save(err => {
          console.log(author)
            })
    })
})

Author.findOneAndUpdate(
  { firstName: 'Ina' },
  { $set: { lastName: 'Garten' } },
  { new: true })
  .then(author => {
    console.log(author)
  })

Author.findOneAndRemove({ firstName: 'Ina' })
  .then(authorResult => {
    Author.find({})
      .then(author => {
        console.log(author)
      })
  })
