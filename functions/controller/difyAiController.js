const DifyAiService = require('../service/difyAiService');

const DifyAiController = {
    askQuestion: async (req, res) => {
        try {
            const query = req.body.query;
            const response = await DifyAiService.askQuestion(query);
            console.log(response);
            res.status(200).send(response); // Gửi phản hồi về client
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
}

module.exports = DifyAiController;
