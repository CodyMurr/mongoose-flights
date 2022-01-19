const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

const flightsSchema = new Schema({
    airline: {
        type: String
    },
    airport: {
        type: String,
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        require
    },
    departs: {
        type: Date,
        default: function() {
           const today = new Date().toLocaleDateString();
           return today;
        }
    }, 
    destinations: [destinationsSchema] 
});

module.exports = mongoose.model('Flight', flightsSchema);