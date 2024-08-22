import WorkModel from '../models/workModel.js';

const workController = {
    createWork: async (req, res) => {
        try {
            const newWork = new WorkModel(req.body);
            await newWork.save();
            res.status(201).json({
                message: 'Work created successfully',
                work: newWork
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating work',
                error
            });
        }
    },

    getWorkById: async (req, res) => {
        try {
            const work = await WorkModel.findById(req.params.id);
            if (!work) return res.status(404).json({
                message: 'Work not found'
            });
            res.json(work);
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching work',
                error
            });
        }
    },

    updateWork: async (req, res) => {
        try {
            const updatedWork = await WorkModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedWork) return res.status(404).json({
                message: 'Work not found'
            });
            res.json(updatedWork);
        } catch (error) {
            res.status(500).json({
                message: 'Error updating work',
                error
            });
        }
    },

    deleteWork: async (req, res) => {
        try {
            const deletedWork = await WorkModel.findByIdAndDelete(req.params.id);
            if (!deletedWork) return res.status(404).json({
                message: 'Work not found'
            });
            res.json({
                message: 'Work deleted successfully'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting work',
                error
            });
        }
    }
};

export default workController;
