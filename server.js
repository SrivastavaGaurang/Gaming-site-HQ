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
  app.get('/challenges/challenge7', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge7.html'));
  });
  app.get('/challenges/challenge8', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge8.html'));
  });
  app.get('/challenges/challenge9', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge9.html'));
  });
  app.get('/challenges/challenge10', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge10.html'));
  });
  app.get('/challenges/challenge11', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge11.html'));
  });
  app.get('/challenges/challenge12', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge12.html'));
  });
  app.get('/challenges/challenge13', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge13.html'));
  });
  app.get('/challenges/challenge14', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge14.html'));
  });
  app.get('/challenges/challenge15', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge15.html'));
  });
  app.get('/challenges/challenge16', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge16.html'));
  });
  app.get('/challenges/challenge17', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge17.html'));
  });
  app.get('/challenges/challenge18', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge18.html'));
  });
  app.get('/challenges/challenge19', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge19.html'));
  });
  app.get('/challenges/challenge20', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge20.html'));
  });
  app.get('/challenges/challenge21', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge21.html'));
  });
  app.get('/challenges/challenge22', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge22.html'));
  });
  app.get('/challenges/challenge23', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge23.html'));
  });
  app.get('/challenges/challenge24', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge24.html'));
  });
  app.get('/challenges/challenge25', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge25.html'));
  });
  app.get('/challenges/challenge26', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge26.html'));
  });
  app.get('/challenges/challenge27', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'challenges', 'challenge27.html'));
  });
 
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});