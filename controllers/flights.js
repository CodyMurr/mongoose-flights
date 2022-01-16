const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    const newFlight = new Flight();
    const departure = newFlight.departs;
    res.render('flights/new');
}