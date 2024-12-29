const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

// Initialize environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Fawn & Feather API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});