const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// For any route not found in static files, serve 404.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 