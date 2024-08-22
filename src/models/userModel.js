import mongoose from 'mongoose';
import CollectionsMongo from '../../config.js';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    birthplace: {
        type: String,
    },
    nationality: {
        type: String,
    },
    education: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    works: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Work' }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    process: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Process' }]
})

const UserModel = mongoose.model(CollectionsMongo.users, userSchema);
export default UserModel;