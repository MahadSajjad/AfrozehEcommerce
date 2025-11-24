const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config();


exports.registerController = async (req, res) => {

    try {
        const { fullName, email, password } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) { return res.status(400).json({ message: "Enable to register with this email", success: false }) }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, password: hashedPassword })
        await newUser.save();
        const token = jwt.sign({ _id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
        const { password: _, ...userWithoutPassword } = newUser._doc
        res.status(201).json({ message: "User created successfully", user: userWithoutPassword, token, success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", success: false })
    }
}

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) { return res.status(400).json({ message: "User with this email does not exists ", success: false }) }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) { return res.status(400).json({ message: "Invaild Email or Password ", success: false }) }

        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
        const { password: _, ...userWithoutPassword } = user._doc;

        res.status(201).json({ message: "User login successfully", user: userWithoutPassword, token, success: true })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}