import { Router } from 'express'
import { getAllUsersController, createUserController, getUserByIdController, editUserController } from '../controllers/users-controllers'
import { getAllTasksController, createTaskController, getTaskByIdController } from '../controllers/tasks-controllers'

export const router = Router()

router.get('/users', getAllUsersController)
router.post('/user', createUserController)
router.get('/user/:id', getUserByIdController)
router.put('/user/edit/:id', editUserController)
router.get('/tasks', getAllTasksController)
router.post('/task', createTaskController)
router.get('/task/:id', getTaskByIdController)
