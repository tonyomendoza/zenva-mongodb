// require node modules
const express = require('express')
const mongoose = require('mongoose')

// require models
const City = require('./models/City');
const Country = require('./models/Country');

// connect to MongoDB using the ORM
mongoose.connect('mongodb://localhost/world') // pass this as a second argument if supported: {userNewURLParser: true}
    .then(data =>{
        console.log('Mongo DB connection success!');
    })
    .catch(err =>{
        console.log('Mongo DB connection failed:' + err.message);
    });

const app = express()

// Routes

app.get('/', (req, res, next) => {
    res.json({
        confirmation: 'success',
        data: 'This is the Mongo project!'
    });
});

app.get('/countries', (req, res, next) =>{
    Country.find(null)
        .then(countries => {
            res.json({
                confirmation: 'success',
                data: countries
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
});

app.get('/cities', (req, res, next) =>{
    City.find(null)
        .then(cities => {
            res.json({
                confirmation: 'success',
                data: cities
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
});

// Start Server

app.listen(5000);
console.log('App running http://localhost:5000');