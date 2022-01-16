const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    airline: String,
    airport: {
        type: String,
        default: 'DEN'
    },
    flightNo:{
        type: Number
    } ,
    departs: {
        type: Number
    }
});

module.exports = mongoose.model('Flight', flightsSchema);