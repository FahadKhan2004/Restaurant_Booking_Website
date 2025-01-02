const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Add a new booking
router.post('/', async (req, res) => {
  const { date, time, guests, name, contact } = req.body;
  const existingBooking = await Booking.findOne({ date, time });

  if (existingBooking) {
    return res.status(400).json({ message: 'Time slot already booked' });
  }

  const booking = new Booking({ date, time, guests, name, contact });
  await booking.save();
  res.status(201).json(booking);
});

// Get all bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.status(200).json(bookings);
});

module.exports = router;
