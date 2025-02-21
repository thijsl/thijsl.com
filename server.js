const express = require('express');
const path = require('path');
const app = express();

// The port Gandi expects us to use
const port = process.env.PORT || 3000;

// Serve static files from _site directory
app.use(express.static(path.join(__dirname, '_site')));

// For any route not found in static files, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '_site', '404.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 