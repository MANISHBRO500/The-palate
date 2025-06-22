import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bookingRoutes from './routes/bookingRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bookings', bookingRoutes);

// Static file serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/customer', express.static(path.join(__dirname, '../frontend/customer')));
app.use('/admin', express.static(path.join(__dirname, '../frontend/admin')));

// Default route
app.get('/', (req, res) => {
  res.send('Table Booking System API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
