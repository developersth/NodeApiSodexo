const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controler');
const db = require('../config/db.config');

// define variable
const sequelize = db.sequelize;
const Users = db.users;

router.post('/', bookingController.create);
router.get('/', bookingController.findAll);
router.get('/find-machine-booking', bookingController.findMachineBooking);
router.get('/find-booking', bookingController.findAllBookingSearch);
router.get('/:id', bookingController.findOne);
router.put('/:id', bookingController.update);
router.put('/:id', bookingController.cancel_booking);

module.exports = router;