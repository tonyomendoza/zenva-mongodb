const express = require('express');
const router = express.Router();
const Country = require('../models/Country');

router.get('/', (req, res, next) =>{
    const query = req.query;

    Country.find(query)
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

router.get('/add', (req, res, next) =>{
    const details = req.query;

    if(Country.exists({name: details.name, continent: details.continent})){
        res.json({
            confirmation: 'fail',
            message: "Country already exists on that continent"
        })
    }
    else 
    {
        Country.create(details)
        .then(country => {
            res.json({
                confirmation: 'success',
                data: country
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
    }
});


router.get('/update/:id', (req, res, next) =>{
    const updateDetails = req.query;
    const countryId = req.params.id;

    // the new:true attribute tells it to return the updated version of the object.
    Country.findByIdAndUpdate(countryId, updateDetails, {new:true})
    .then(country => {
        res.json({
            confirmation: 'success',
            data: country
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
});

router.get('/:id', (req, res, next) =>{
    const query = req.query;

    Country.findById(req.params.id)
        .then(country => {
            res.json({
                confirmation: 'success',
                data: country
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'Country with ID ' + req.params.id + ' not found.'
            })
        })
});

module.exports = router;