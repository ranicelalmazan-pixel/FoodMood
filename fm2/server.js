const express = require('express');
const path = require('path');

// Load environment variables from the local directory
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Serve static files from the current folder (fm2)
app.use(express.static(__dirname));

// API Proxy Endpoint to OpenAI API
app.post('/api/ai', async (req, res) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || 'gpt-5.4-nano-2026-03-17';

    if (!apiKey) {
        return res.status(500).json({
            error: {
                message: "OpenAI API Key is missing on the server. Please check your server's .env file."
            }
        });
    }

    try {
        const { messages, temperature } = req.body;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: messages || [],
                temperature: temperature !== undefined ? temperature : 0.7
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error("Error contacting OpenAI API:", error);
        res.status(500).json({
            error: {
                message: "An internal server error occurred while connecting to OpenAI."
            }
        });
    }
});

// Fallback to index.html for single page application routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`FoodMood server is running at http://localhost:${PORT}`);
    console.log(`OpenAI Model in use: ${process.env.OPENAI_MODEL || 'gpt-5.4-nano-2026-03-17'}`);
});
