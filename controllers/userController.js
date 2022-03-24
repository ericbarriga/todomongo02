const { isEmail } = require('validator');

const { User } = require('../model')

module.exports = {
    createUser: async (req, res) => {
        const { username, email, role, powerLevel } = req.body;
        if (!isEmail(email)) {
            return res.status(401).json({ error: 'Must be valid  email' })
        }

        try {
            const newUser = await User.create({
                username,
                email,
                role,
                powerLevel,
            });
            res.json(newUser);
        } catch (error) {
            res.json({ error })
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.json(error)

        }
    },

    getUserById: async (req, res) => {
        const { userID } = req.params;
        try {
            const user = await User.findById(userID, '-role -powerLevel')
        } catch (error) {
            res.json(error);
        }
    },

    updateUserById: async (req, res) => {
        const { userId } = req.params;
        try {
            const updateUserById = await User.findByIdAndUpdate(
                userId,
                { ...req.body },
                // you are adding this because in mongo db returns the old
                // id so you have to set it to return the one you updated 
                {
                    new: true,
                    // mongo doesnt add validators when you set to true 
                    // so you have to re enter them here 
                    runValidators: true,
                },
            );
            res.json(updateUserById);
        } catch (error) {
            res.json(error);
        }
    }
}