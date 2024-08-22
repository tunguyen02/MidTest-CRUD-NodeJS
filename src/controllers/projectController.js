import ProjectModel from '../models/projectModel.js';

const projectController = {
    createProject: async (req, res) => {
        try {
            const newProject = new ProjectModel(req.body);
            await newProject.save();
            res.status(201).json({
                message: 'Project created successfully',
                project: newProject
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating project',
                error
            });
        }
    },

    getProjectById: async (req, res) => {
        try {
            const project = await ProjectModel.findById(req.params.id);
            if (!project) return res.status(404).json({
                message: 'Project not found'
            });
            res.json(project);
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching project',
                error
            });
        }
    },

    updateProject: async (req, res) => {
        try {
            const updatedProject = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProject) return res.status(404).json({
                message: 'Project not found'
            });
            res.json(updatedProject);
        } catch (error) {
            res.status(500).json({
                message: 'Error updating project',
                error
            });
        }
    },

    deleteProject: async (req, res) => {
        try {
            const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
            if (!deletedProject) return res.status(404).json({
                message: 'Project not found'
            });
            res.json({
                message: 'Project deleted successfully'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting project',
                error
            });
        }
    }
};

export default projectController;
