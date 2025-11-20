// Import necessary packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Import route handlers
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Initialize the Express application
const app = express();

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Enable the server to accept JSON data in the request body
app.use(express.json());

// --- API Routes ---
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


// --- Error Handling Middleware ---
// Custom middleware for handling 404 Not Found errors
app.use(notFound);
// Custom middleware for handling all other errors
app.use(errorHandler);

// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});