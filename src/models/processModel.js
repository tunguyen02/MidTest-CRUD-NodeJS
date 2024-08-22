import mongoose from "mongoose";
import CollectionsMongo from "../../config.js";

const processSchema = new mongoose.Schema({
    nameCompany: {
        type: String
    },
    role: {
        type: String
    },
    dateBegin: {
        type: Date
    },
    dateEnd: {
        type: Date
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const ProcessModel = mongoose.model(CollectionsMongo.process, processSchema);
export default ProcessModel;