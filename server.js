require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/index');

// mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/Project-3-OrgoSpace

app.use('/', routes)

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}) 

app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.send('WE GOT ACTIONNNNN')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(" AYYEEE WE LIIVVEEE BAYBEHHH " + PORT);
})