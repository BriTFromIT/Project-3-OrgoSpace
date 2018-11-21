const mongoose = require('../db/connections')
const Schema = mongoose.Schema


// CLIENT PORTFOLIO - shows each client information listed
// will include Client's: 
// LinkedIn API
// Bio
// Resume
// Cover Letter
// Brand Statement

const Portfolio = new Schema ({
     // Client's current information
     img: String,
     clientName: String,
     location: String,
     desiredPosition: String,
     desiredSalary: Number,

     resume: String,
     coverLetter: String,
     brandStatement: String,
     
    

})

module.exports = mongoose.model('Portfolio', Portfolio)

