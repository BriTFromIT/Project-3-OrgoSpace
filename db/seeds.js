require('dotenv').config()
const Employee = require('../model/Employees')
const Client = require('../model/Clients')
const Resume = require('../model/Portfolios')

const mongoose = require('./connections')

mongoose.connect(process.env.MONGODB_URI)

let resume1 = new resume1 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})
let resume2 = new resume2 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})
let resume3 = new resume3 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})


// ---------------------------------------------------------------

let coverLetter1 = new coverLetter1 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})
let coverLetter2 = new coverLetter2 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})
let coverLetter3 = new coverLetter3 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})

// ---------------------------------------------------------------

let coverLetter1 = new coverLetter1 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})
let coverLetter2 = new coverLetter2 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})
let coverLetter3 = new coverLetter3 ({
    img: ""//ADD IMAGE OF YOUR RESUME HERE
})


// ---------------------------------------------------------------
// ---------------------------------------------------------------

// ******* This section is for the Clients data information ******

 // ---------------------------------------------------------------
 // ---------------------------------------------------------------


const client1 = new Film({
    name: "Garrick Anniversary",
    location: "04-20-19",
    currentPosition: "Earth2",
    portfolioFiles: [resume1, coverletter1, Brandstatement, Bio, linkedInSite]
 
 })
 const client2 = new Film({
    name: "Garrick Anniversary",
    date: "04-20-19",
    time: "8pm",
    location: "Earth2",
    type: "reunion",
    filminfo: [Cameras, Gels, Printers, Backdrops, Tripods, Computers]
 
 })
 const client3 = new Film({
    name: "Garrick Anniversary",
    date: "04-20-19",
    time: "8pm",
    location: "Earth2",
    type: "reunion",
    filminfo: [Cameras, Gels, Printers, Backdrops, Tripods, Computers]
 
 })

 // ---------------------------------------------------------------
 // ---------------------------------------------------------------

// ******* This section is for the Employee (User) data information ******

 // ---------------------------------------------------------------
 // ---------------------------------------------------------------

 

let newEmployee = new Employee ({
    img: "String",
    username: "String",
    password: "String",
    location: "String",
})