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
     
     // -------------- Client's portfolio items:

    //  linkedIn: String, //LinkedIn API
    //  bio: String, // time restraint
     resume: String,
     coverLetter: String,
     brandStatement: String,
     
    

})

module.exports = mongoose.model('Portfolio', Portfolio)

