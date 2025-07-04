
const User = require('../models/User');
// Signup
const registerUser = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const user = new User({ username, password, role: role || 'user' });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        res.status(400).json({ message: 'Registration failed', error: err.message });
    }
};

// Login
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch (err) {
        res.status(400).json({ message: 'Login failed', error: err.message });
    }
};

module.exports = { registerUser, loginUser };