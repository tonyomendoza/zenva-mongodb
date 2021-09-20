const express = require('express')
const mongoose = require('mongoose')

// connect to MongoDB using the ORM
mongoose.connect('mongodb://localhost/world') // pass this as a second argument if supported: {userNewURLParser: true}
    .then(data =>{
        console.log('Mongo DB connection success!');
    })
    .catch(err =>{
        console.log('Mongo DB connection failed:' + err.message);
    });

const app = express()

app.use('/', (req, res, next) => {
    res.json({
        confirm: 'success',
        data: 'This is the Mongo project!'
    });
});

app.listen(5000);
console.log('App running http://localhost:5000');