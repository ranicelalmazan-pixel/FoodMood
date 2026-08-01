const express = require('express');
const path = require('path');

// Load environment variables from the local directory
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Enable CORS for all requests (useful when running from IDE live preview or other custom ports)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

// Serve static files from the current folder (fm2)
app.use(express.static(__dirname));

const aiHandler = require('./api/ai');

// API Proxy Endpoint to OpenAI API
app.post('/api/ai', aiHandler);

// Fallback to index.html for single page application routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`FoodMood server is running at http://localhost:${PORT}`);
    console.log(`OpenAI Model in use: ${process.env.OPENAI_MODEL || 'gpt-5.4-nano-2026-03-17'}`);
});
