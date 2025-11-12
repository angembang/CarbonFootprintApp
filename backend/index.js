const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/users');
const travelRoutes = require('./routes/travels');

app.use('/api', userRoutes);
app.use('/api', travelRoutes);

// Test root
app.get('/', (req, res) => {
  res.send('Carbon Footprint API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
