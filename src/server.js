const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;

// In-memory storage for scholarships
let scholarships = ["schoalrship1"];




// Route for officers to publish scholarship information (POST)- only officers can access this portal
app.post('/api/scholarships', (req, res) => {
    const scholarship = req.body;
    scholarships.push(scholarship);
    res.status(201).json({ message: 'Scholarship published successfully', scholarship });
});

// Route for students to retrieve scholarship information (GET) and display on student portals
app.get('/api/scholarships', (req, res) => {
    res.json(scholarships);
});


app.get('/', (req, res) => {
    res.send('Welcome to my API!');
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
