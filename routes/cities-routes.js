const express = require('express');
const router = express.Router();
const City = require('../models/City');

router.get('/', (req, res, next) =>{
    const query = req.query;

    City.find(query)
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

// Add should come before Get by ID since ORDER MATTERS
router.get('/add', (req, res, next) =>{
    const details = req.query;
    
    City.create(details)
    .then(city => {
        res.json({
            confirmation: 'success',
            data: city
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

    City.findById(req.params.id)
        .then(city => {
            res.json({
                confirmation: 'success',
                data: city
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'City with ID ' + req.params.id + ' not found.'
            })
        })
});

router.get('/update/:id', (req, res, next) =>{
    const updateDetails = req.query;
    const cityId = req.params.id;

    // the new:true attribute tells it to return the updated version of the object.
    City.findByIdAndUpdate(cityId, updateDetails, {new:true})
    .then(city => {
        res.json({
            confirmation: 'success',
            data: city
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
});

module.exports = router;