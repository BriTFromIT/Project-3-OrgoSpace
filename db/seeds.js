require('dotenv').config()
const Employee = require('../model/Employee')
const Client = require('../model/Client')
const Portfolio = require('../model/Portfolio')

const mongoose = require('./connections')

mongoose.connect(process.env.MONGODB_URI)


// ---------------------------------------------------------------
// ---------------------------------------------------------------

// ******* This section is for EACH Client's Portfolio information ******

 // ---------------------------------------------------------------
 // ---------------------------------------------------------------

let Portfolio1 = new Portfolio ({
    img: " ",
    clientName: " Brittany C. Lewis",
    location: " Atlanta, Georgia ",
    desiredPosition: " Database Administrator ",
    desiredSalary: 85000,
    // -------------- Client's portfolio items:
    linkedIn: " ",
     // bio: " ", // time restraint 
    resume: "./client/public/resumes/OrgoSpace_R1 ",
    coverLetter: " ./client/public/coverletters/OrgoSpace_CL1  ",
    brandStatement: " ./client/public/brandstatement/OrgoSpace_BS1   ",

}) 

 // ---------------------------------------------------------------

let Portfolio2 = new Portfolio ({
    img: " ",
    clientName: " David Williams ",
    location: "  ",
    desiredPosition: " ",
    desiredSalary: Number,
    // -------------- Client's portfolio items:
    linkedIn: " ",
    // bio: " ", // time restraint 
    resume: "./client/public/resumes/OrgoSpace_R2  ",
    coverLetter: " ./client/public/coverletters/OrgoSpace_CL2  ",
    brandStatement: " "

}) 

 // ---------------------------------------------------------------

let Portfolio3 = new Portfolio ({
    img: " ",
    clientName: " Issa New-Mario  ",
    location: "  ",
    desiredPosition: " ",
    desiredSalary: Number,
    // -------------- Client's portfolio items:
    linkedIn: " ",
     // bio: " ", // time restraint 
    resume: " ./client/public/resumes/OrgoSpace_R3 ",
    coverLetter: " ./client/public/coverletters/OrgoSpace_CL3 ",
    brandStatement: " ./client/public/brandstatement/OrgoSpace_BS3  "

}) 




// ---------------------------------------------------------------
// ---------------------------------------------------------------

// ******* This section is for the Clients data information ******

 // ---------------------------------------------------------------
 // ---------------------------------------------------------------


 let client1 = new Client ({
    img: " ",
    name: " Brittany C. Lewis ",
    location: " Atlanta, Georgia ",
    contact: " 2023656034 ",
    currentPosition: " General Assembly Student ",
    portfolioFiles: [ Portfolio1 ] 
 
 })

  // ---------------------------------------------------------------

 let client2 = new Client ({
    img: " ",
    name: " ",
    location: " ",
    contact: " ",
    currentPosition: " ",
    portfolioFiles: [ Portfolio2 ] 
 
 })

  // ---------------------------------------------------------------

 let client3 = new Client ({
    img: " ",
    name: " ",
    location: " ",
    contact: " ",
    currentPosition: " ",
    portfolioFiles: [ Portfolio3 ] 
 
 })


 // ---------------------------------------------------------------
 // ---------------------------------------------------------------

// ******* This section is for the Employee (User) data information ******

 // ---------------------------------------------------------------
 // ---------------------------------------------------------------

 

let newEmployee = new Employee ({
    img: " ",
    username: " ",
    password: " ",
    location: " "
})