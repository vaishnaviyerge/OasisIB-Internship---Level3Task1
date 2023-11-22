const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Configure middleware (body-parser and CORS)
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pizzaApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
const authRoutes = require('./routes/auth');
const pizzaRoutes = require('./routes/pizza');
const adminRoutes = require('./routes/admin');

app.use('/api/auth', authRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
