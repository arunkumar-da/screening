const express = require('express'); // Importing express
const path = require('path'); // Importing path for file paths

const app = express(); // Creating an express app

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes and serve 'index.html'
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), (err) => {
    if (err) {
      res.status(err.status || 500).send('Server Error');
    }
  });
});

// Start the server on port 9000
app.listen(9000, () => {
  console.log('Server is running on port 9000'); // Log when server starts
});
