import mongoose from "mongoose";
import CollectionsMongo from "../../config.js";

const projectSchema = new mongoose.Schema({
    nameProject: {
        type: String,
    },
    content: {
        type: String,
    },
    role: {
        type: String,
    },
    dateBegin: {
        type: Date,
    },
    dateEnd: {
        type: Date,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const ProjectModel = mongoose.model(CollectionsMongo.projects, projectSchema);
export default ProjectModel;