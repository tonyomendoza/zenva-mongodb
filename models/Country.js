// const mongoose = require('mongoose'); // Throws an "import can only be used in typescript" error
const mongoose = require('mongoose');

const Country = new mongoose.Schema({
    name: {type:String, default: ""},
    continent: {type:String, default: ""},
    population: {type:Number, default: 0}
});

module.exports = mongoose.model('Country', Country);