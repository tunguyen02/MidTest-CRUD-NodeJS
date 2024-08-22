import { Router } from "express";
import workController from '../controllers/workController.js';

const WorkRouter = Router();

WorkRouter.post('/work', workController.createWork);
WorkRouter.get('/work/:id', workController.getWorkById);
WorkRouter.put('/work/:id', workController.updateWork);
WorkRouter.delete('/work/:id', workController.deleteWork);

export default WorkRouter;
