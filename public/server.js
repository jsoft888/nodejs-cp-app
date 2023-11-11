// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to check the time of the request
app.use((req, res, next) => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const hourOfDay = currentDate.getHours();

  // Check if it's a weekday and the time is between 9 and 17
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next();
  } else {
    res.status(403).send('This service is only available during working hours (Mon-Fri, 9-17).');
  }
});

// Serve static files from the 'build' directory (assuming you build your React app)
app.use(express.static(path.join(__dirname, 'build')));

// Handle routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/our-services', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/contact-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
