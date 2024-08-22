import ProcessModel from '../models/processModel.js';

const processController = {
    createProcess: async (req, res) => {
        try {
            const newProcess = new ProcessModel(req.body);
            await newProcess.save();
            res.status(201).json({
                message: 'Process created successfully',
                process: newProcess
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating process',
                error
            });
        }
    },

    getProcessById: async (req, res) => {
        try {
            const process = await ProcessModel.findById(req.params.id);
            if (!process) return res.status(404).json({
                message: 'Process not found'
            });
            res.json(process);
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching process',
                error
            });
        }
    },

    updateProcess: async (req, res) => {
        try {
            const updatedProcess = await ProcessModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedProcess) return res.status(404).json({
                message: 'Process not found'
            });
            res.json(updatedProcess);
        } catch (error) {
            res.status(500).json({
                message: 'Error updating process',
                error
            });
        }
    },

    deleteProcess: async (req, res) => {
        try {
            const deletedProcess = await ProcessModel.findByIdAndDelete(req.params.id);
            if (!deletedProcess) return res.status(404).json({
                message: 'Process not found'
            });
            res.json({
                message: 'Process deleted successfully'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting process',
                error
            });
        }
    }
};

export default processController;
