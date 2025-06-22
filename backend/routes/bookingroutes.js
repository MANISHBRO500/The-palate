import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json({ message: 'Booking request submitted' });
});

router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Booking.findByIdAndUpdate(id, { status });
  res.json({ message: 'Booking updated' });
});

export default router;
