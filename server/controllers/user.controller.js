import User from '../mongodb/models/user.js';

const getAllUsers = async (req, res) => {};
const createUser = async (req, res) => {
    const {name, email, avatar} = req.body;
    try {
        const userExists = await User.findOne({email})
        if(userExists) return res.status(200).json(userExists);
        const newUser = await User.create({
            name,
            email,
            avatar
        })
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getUserById = async (req, res) => {};

export {
    getAllUsers,
    getUserById,
    createUser
}