const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required
    },
    departs: {
        type: Date,
        default: function() {
           const today = new Date().toLocaleDateString();
           const nextYear = parseInt(today.charAt(today.length-1)) + 1;
           return nextYear;
        }
    }, 
});

module.exports = mongoose.model('Flight', flightsSchema);