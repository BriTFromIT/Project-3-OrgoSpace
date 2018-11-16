require('dotenv').config()
const Employee = require('../model/Employee')
const Client = require('../model/Client')
const Portfolio = require('../model/Portfolio')

const mongoose = require('./connections')

// mongoose.connect(process.env.MONGODB_URI)


// ("\ '' /").___..--' ' "`-._  
//  `ಠ_ ಠ  )   `-.  (       ).`-.__.`) 
//   (_Y_.)'    ._   )  `._ `. ``-..-' 
//      _..`--'_. .-_/  /--'_.'  .'          
//    (i l).-' '    ((i). '   ((!.-'


// ---------------------------------------------------------------
// ---------------------------------------------------------------

// ******* This section is for EACH Client's Portfolio information ******

// ---------------------------------------------------------------
// ---------------------------------------------------------------

let Portfolio1 = new Portfolio({
    img: " ",
    clientName: " Brittany C. Lewis",
    location: " Atlanta, Georgia ",
    desiredPosition: " Database Administrator ",
    desiredSalary: 85000,

    // -------------- Client's portfolio items:

    // linkedIn: " ",
    // bio: " ", // time restraint 
    resume: "./client/public/resumes/OrgoSpace_R1 ",
    coverLetter: " ./client/public/coverletters/OrgoSpace_CL1  ",
    brandStatement: " ./client/public/brandstatement/OrgoSpace_BS1   ",

})

// ---------------------------------------------------------------

let Portfolio2 = new Portfolio({
    img: " ",
    clientName: " David Williams ",
    location: " Atlanta, Georgia ",
    desiredPosition: " President of Venus ",
    desiredSalary: 100000000,

    // -------------- Client's portfolio items:

    // linkedIn: " ",
    // bio: " ", // time restraint 
    resume: "./client/public/resumes/OrgoSpace_R2  ",
    coverLetter: " ./client/public/coverletters/OrgoSpace_CL2  ",
    brandStatement: " "

})

// ---------------------------------------------------------------

let Portfolio3 = new Portfolio({
    img: " ",
    clientName: " Loren Kelley ",
    location: " Atlanta, Georgia ",
    desiredPosition: " Super Woman ",
    desiredSalary: 450000,

    // -------------- Client's portfolio items:

    // linkedIn: " ",
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


let client1 = new Client({
    img: " ",
    name: " Brittany C. Lewis ",
    location: " Atlanta, Georgia ",
    contact: " 2023656034 ",
    currentPosition: " General Assembly Student ",
    portfolioFiles: [Portfolio1]

})

// ---------------------------------------------------------------

let client2 = new Client({
    img: " ",
    name: " David L. Williams",
    location: " Atlanta, Georgia",
    contact: " 1234567890 ",
    currentPosition: " General Assembly Student ",
    portfolioFiles: [Portfolio2]

})

// ---------------------------------------------------------------

let client3 = new Client({
    img: " ",
    name: " Loren Kelley ",
    location: " Atlanta, Georgia ",
    contact: " 0987654321 ",
    currentPosition: " General Assembly Student ",
    portfolioFiles: [Portfolio3]

})


// ---------------------------------------------------------------
// ---------------------------------------------------------------

// ******* This section is for the Employee (User) data information ******

// ---------------------------------------------------------------
// ---------------------------------------------------------------



let newEmployee = new Employee({
    img: " ",
    username: " Diamond Danner ",
    password: " DiamondIsLitty08 ",
    location: " Atlanta, Georgia "
})

// ---------------------------------------------------------------
// ---------------------------------------------------------------

Employee.remove({})
    .then(() => Client.deleteMany())
    .then(() => Portfolio.deleteMany())
    .then(() => Client.insertMany([client1, client2, client3])
        .then(() => Portfolio.insertMany([Portfolio1, Portfolio2, Portfolio3]))
        .then(() => newEmployee.save())
        .then(() => console.log("WE IN DISSS BIHHHH!!!! "))
        .then(() => mongoose.connection.close()))









                // _______oBBBBB8o______oBBBBBBB 
                // _____o8BBBBBBBBBBB__BBBBBBBBB8________o88o, 
                // ___o8BBBBBB**8BBBB__BBBBBBBBBB_____oBBBBBBBo, 
                // __oBBBBBBB*___***___BBBBBBBBBB_____BBBBBBBBBBo, 
                // _8BBBBBBBBBBooooo___*BBBBBBB8______*BB*_8BBBBBBo, 
                // _8BBBBBBBBBBBBBBBB8ooBBBBBBB8___________8BBBBBBB8, 
                // __*BBBBBBBBBBBBBBBBBBBBBBBBBB8_o88BB88BBBBBBBBBBBB, 
                // ____*BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB8, 
                // ______**8BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB*, 
                // ___________*BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB8*, 
                // ____________*BBBBBBBBBBBBBBBBBBBBBBBB8888**, 
                // _____________BBBBBBBBBBBBBBBBBBBBBBB*, 
                // _____________*BBBBBBBBBBBBBBBBBBBBB*, 
                // ______________*BBBBBBBBBBBBBBBBBB8, 
                // _______________*BBBBBBBBBBBBBBBB*, 
                // ________________8BBBBBBBBBBBBBBB8, 
                // _________________8BBBBBBBBBBBBBBBo, 
                // __________________BBBBBBBBBBBBBBB8, 
                // __________________BBBBBBBBBBBBBBBB,