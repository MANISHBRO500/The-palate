import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  event: String,
  date: String,
  day: String,
  startTime: String,
  endTime: String,
  people: Number,
  status: { type: String, default: 'Pending' }
});

export default mongoose.model('Booking', bookingSchema);
