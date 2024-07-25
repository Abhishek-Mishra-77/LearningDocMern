import User from "../models/userModel.js";


const addUser = async (req, res) => {
    const { name } = req.body;
    try {
        const user = await User.create({ name });
        if (!user) {
            return res.status(400).json({ message: "Something went wrong" });
        }

        return res.status(200).json({ user });
    }
    catch (error) {
        return res.status(400).json({ error: error })
    }
}
const removeUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        await user.destroy();


        return res.status(200).json({ message: "Successfully removed the user" });
    }
    catch (error) {
        return res.status(400).json({ error })
    }
}


const allUser = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users) {
            return res.status(400).json({ message: "User not found" });
        }

        return res.status(200).json({ users });
    }
    catch (error) {
        return res.status(400).json({ error })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        user.name = name;
        user.save();
        return res.status(200).json({ user });
    }
    catch (error) {
        return res.status(400).json({ error })
    }
}

const getUser = async (req, res) => {
    const { name } = req.body;
    try {
        const user = await User.findOne({ where: { name } });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }


        return res.status(200).json({ user });
    }
    catch (error) {
        return res.status(400).json({ error })
    }
}

export { addUser, removeUser, allUser, updateUser, getUser };