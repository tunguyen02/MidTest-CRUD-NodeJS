import mongoose from "mongoose";
import CollectionsMongo from "../../config.js";

const workSchema = new mongoose.Schema({
    skill: {
        type: String,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    workProcess: {
        type: String
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const WorkModel = mongoose.model(CollectionsMongo.works, workSchema);
export default WorkModel;