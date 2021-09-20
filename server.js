// require node modules
const express = require('express')
const mongoose = require('mongoose')

// require models
// const City = require('./models/City');
// const Country = require('./models/Country');

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

const cities = require('./routes/cities-routes');
app.use('/cities', cities);

const countries = require('./routes/countries-routes');
app.use('/countries', countries);

app.get('/', (req, res, next) => {
    res.json({
        confirmation: 'success',
        data: 'This is the Mongo project!'
    });
});

// Start Server

app.listen(5000);
console.log('App running http://localhost:5000');