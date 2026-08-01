// Serverless Function for Vercel - Proxy to OpenAI API
module.exports = async (req, res) => {
    // Enable CORS for Vercel
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
    );

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({
            error: {
                message: "Method Not Allowed"
            }
        });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || 'gpt-5.4-nano-2026-03-17';

    if (!apiKey) {
        return res.status(500).json({
            error: {
                message: "OpenAI API Key is missing on the server. Please check your environment variables."
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
};
