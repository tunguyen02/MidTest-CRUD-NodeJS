import UserModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userController = {
    createUser: async (req, res) => {
        try {
            const { name, dateOfBirth, birthplace, nationality, education, email, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new UserModel({
                name,
                dateOfBirth,
                birthplace,
                nationality,
                education,
                email,
                password: hashedPassword,
            });

            await newUser.save();
            res.status(201).json({
                message: 'User created successfully',
                user: newUser
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating user',
                error
            });
        }
    },

    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await UserModel.findOne({ email });
            if (!user) return res.status(404).json({
                message: 'User not found'
            });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({
                message: 'Invalid credentials'
            });

            const token = jwt.sign({ id: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
            res.json({ token, user });
        } catch (error) {
            res.status(500).json({
                message: 'Error logging in',
                error
            });
        }
    },

    logoutUser: (req, res) => {
        res.status(200).json({
            message: 'User logged out successfully'
        });
    },

    getUserById: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id);
            if (!user) return res.status(404).json({
                message: 'User not found'
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching user',
                error
            });
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedUser) return res.status(404).json({
                message: 'User not found'
            });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({
                message: 'Error updating user',
                error
            });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
            if (!deletedUser) return res.status(404).json({
                message: 'User not found'
            });
            res.json({
                message: 'User deleted successfully'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting user',
                error
            });
        }
    }
};

export default userController;
