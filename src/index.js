import express from 'express';

// Instantiate application.
const app = express();
const port = 3000;

// Root route handler
app.get('/', (req, res) => res.json({ message: 'SCV good to go, sir!' }));

// Application http listener
app.listen(port);
