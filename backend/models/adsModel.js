const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adsSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    img: {
        type: String,
        required: true,
    }
})

const Ads = mongoose.model('Ads', adsSchema)

module.exports = Ads