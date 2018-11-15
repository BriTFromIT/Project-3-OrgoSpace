const mongoose = require('../db/connection')
const Schema = mongoose.Schema


// CLIENT PORTFOLIO - shows each client information listed
// will include Client's: 
// Cover Letter, 
// Resume, 
// Linkedin,
// Brand Statement

const Portfolio = new Schema({
    clientName: String,
    location: String,
    desiredPosition: String,
    img: String,
    portItems: [
        name: Schema.Types.ObjectId,
        ref: "Portfolio"
    ]

})

module.exports = mongoose.model('Portfolio', Portfolio)