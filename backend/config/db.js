const mongoose = require('mongoose')


const mongoURI = 'mongodb+srv://usama:Zfd8uhmdxEHKR26c@cluster0.37o1trb.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true})

module.exports = mongoose