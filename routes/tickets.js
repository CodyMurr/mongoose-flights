var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// POST /flights
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;