const UserService = require('../service/userService');

const UserController = {
    createUser: async (req, res) => {
        try {
            const data = req.body;
            const user = await UserService.add(data);
            res.status(201).send({ user, message: "User added successfully" });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await UserService.getAll();
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
}

module.exports = UserController;