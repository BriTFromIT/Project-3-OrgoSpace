const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Client = new Schema({

    name: String,
    location: String,
    contact: Number,
    position: String,
    description: String,
    img: String,
})

module.exports = mongoose.model('Clients', Client)