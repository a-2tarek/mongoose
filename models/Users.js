const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:  Number,     
    favorite_foods: [String]
})

const users = mongoose.model('users', schema)

module.exports = users