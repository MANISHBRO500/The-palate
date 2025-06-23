// backend/routes/bookingRoutes.js
import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Create a booking
router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json({ message: 'Booking request submitted' });
});

// Get all bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// Update booking status
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Booking.findByIdAndUpdate(id, { status });
  res.json({ message: 'Booking updated' });
});

// ✅ Delete all bookings
router.delete('/', async (req, res) => {
  try {
    await Booking.deleteMany({});
    res.json({ message: 'All bookings deleted' });
  } catch (error) {
    console.error('Failed to delete bookings:', error);
    res.status(500).json({ message: 'Server error while deleting bookings' });
  }
});

export default router;
