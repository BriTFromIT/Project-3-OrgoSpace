const mongoose = require('../db/connection')
const Schema = mongoose.Schema


let Employee = new Schema ({
    img: "String",
    username: "String",
    password: "String",
    location: "String",
})

module.exports = mongoose.model('Employees', Employee)