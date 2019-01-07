const mongoose = require('../db/connections')
const Schema = mongoose.Schema
const Client = require('../model/Client')


let Employee = new Schema ({
    img: "String",
    username: "String",
    password: "String",
    location: "String",
    clientProfiles: [Client.schema]
})

module.exports = mongoose.model('Employee', Employee)




// ▓▓▓▓ 
// ▒▒▒▓▓ 
// ▒▒▒▒▒▓ 
// ▒▒▒▒▒▒▓ 
// ▒▒▒▒▒▒▓ 
// ▒▒▒▒▒▒▒▓ 
// ▒▒▒▒▒▒▒▓▓▓ 
// ▒▓▓▓▓▓▓░░░▓ 
// ▒▓░░░░▓░░░░▓ 
// ▓░░░░░░▓░▓░▓ 
// ▓░░░░░░▓░░░▓ 
// ▓░░▓░░░▓▓▓▓ 
// ▒▓░░░░▓▒▒▒▒▓ 
// ▒▒▓▓▓▓▒▒▒▒▒▓ 
// ▒▒▒▒▒▒▒▒▓▓▓▓ 
// ▒▒▒▒▒▓▓▓▒▒▒▒▓ 
// ▒▒▒▒▓▒▒▒▒▒▒▒▒▓ 
// ▒▒▒▓▒▒▒▒▒▒▒▒▒▓ 
// ▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓ 
// ▒▓▒▓▒▒▒▒▒▒▒▒▒▓ 
// ▒▓▒▓▓▓▓▓▓▓▓▓▓ 
// ▒▓▒▒▒▒▒▒▒▓ 
// ▒▒▓▒▒▒▒▒▓ 