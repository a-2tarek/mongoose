const mongoose = require('mongoose')
const users = require('./models/Users')
const server = '127.0.0.1:27017'
const database = 'contacts'

mongoose.connect(`mongodb://${server}/${database}`).then(() => console.log('connected success'))



const userOne = users.create({
    name: 'ahmed',
    age: '25',
    favorite_foods: ['batates', 'molokhya']
})
userOne.then( () => console.log('user 1 created success'))

userTwo = users.create({
    name: 'abdelrahman',
    age: 20
})
userTwo.then( () => console.log('user 2 created success'))

users.findOne({ favorite_foods: 'batates'}).then( (user) => console.log(user))

users.find().then( (data) => console.log(data))

users.findById( {_id: "64885ac81ac7f11817b5c5d1" }).then( (data) => console.log(data))

users.findOneAndUpdate( {_id: "64885ac81ac7f11817b5c5d1"}, {$set: {favorite_foods: ["kabab"]}})

users.findByIdAndDelete({_id: "64885ac81ac7f11817b5c5d1"})

users.deleteMany({ name: "abdelrahman"})

Person.find({favoriteFoods: "batates"}).sort({name : 1}).limit(2).select("-age").exec((err, data) => {
    if(err)
      done(err);
   done(null, data);
 })