import { Router } from "express";
import projectController from '../controllers/projectController.js';

const ProjectRouter = Router();

ProjectRouter.post('/project', projectController.createProject);
ProjectRouter.get('/project/:id', projectController.getProjectById);
ProjectRouter.put('/project/:id', projectController.updateProject);
ProjectRouter.delete('/project/:id', projectController.deleteProject);

export default ProjectRouter;
