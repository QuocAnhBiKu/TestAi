const fetch = require('node-fetch');

const DifyAiService = {
    askQuestion: async (query) => {
        console.log(query);
        const api_key = 'app-z3aAUiepjokxcxiLBf5K9grG';
        const url = 'https://gen-ai.teky.vn/v1/chat-messages';

        const data = {
            "inputs": {},
            "query": query,
            "response_mode": "blocking",
            "conversation_id": "",
            "user": "abc-123"
        };

        const config = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${api_key}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = DifyAiService;
