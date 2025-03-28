const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/hacker-quest', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hacker-quest.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/challenges/challenge1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge1.html'));
  });
  
  app.get('/challenges/challenge2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge2.html'));
  });
  
  app.get('/challenges/challenge3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge3.html'));
  });
  
  app.get('/challenges/challenge4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge4.html'));
  });
  
  app.get('/challenges/challenge5', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge5.html'));
  });
  
  app.get('/challenges/challenge6', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge6.html'));
  });
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});