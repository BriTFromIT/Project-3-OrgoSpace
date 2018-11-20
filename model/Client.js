const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Client = new Schema({
    img: String,
    name: String,
    location: String,
    contact: Number,
    currentPosition: String,
    portfolioFiles: [{
        type: Schema.Types.ObjectId,
        ref: 'Portfolio'
    }]
    
})

module.exports = mongoose.model('Client', Client)

