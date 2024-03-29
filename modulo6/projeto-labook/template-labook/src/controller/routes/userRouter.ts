import express from "express";
import { UserController } from "../UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/user', userController.createUser)
userRouter.get('/user', userController.getUser)
userRouter.get('/user/:id', userController.getUserById)