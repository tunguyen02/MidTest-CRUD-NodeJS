import { Router } from "express";
import userController from '../controllers/userController.js';

const UserRouter = Router();

UserRouter.post('/user', userController.createUser);
UserRouter.post('/login', userController.loginUser);
UserRouter.post('/logout', userController.logoutUser);
UserRouter.get('/user/:id', userController.getUserById);
UserRouter.put('/user/:id', userController.updateUser);
UserRouter.delete('/user/:id', userController.deleteUser);

export default UserRouter;
