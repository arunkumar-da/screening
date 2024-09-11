const express = require('express'); // Fixed the syntax for importing express

const path = require('path');

const app = express(); // Fixed the syntax for creating an express app

app.use(express.static(path.join(__dirname, 'build'))); // Fixed `_dirname` to `__dirname`

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); // Fixed `_dirname` to `__dirname`
});

app.listen(9000, () => {
  console.log('Server is running on port 9000'); // Added a callback to log when the server is running
});
