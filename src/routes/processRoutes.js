import { Router } from "express";
import processController from '../controllers/processController.js';

const ProcessRouter = Router();

ProcessRouter.post('/process', processController.createProcess);
ProcessRouter.get('/process/:id', processController.getProcessById);
ProcessRouter.put('/process/:id', processController.updateProcess);
ProcessRouter.delete('/process/:id', processController.deleteProcess);

export default ProcessRouter;
