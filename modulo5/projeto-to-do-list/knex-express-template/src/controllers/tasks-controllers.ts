
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'
import { getAllTasksRepository, createTaskRepository, getTaskByIdRepository } from '../repository/tasks-repository'
import { Task, UserTask } from '../types/types'

export const getAllTasksController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const tasks = await getAllTasksRepository()

        if (!tasks) {
            errorCode = 404
            throw new Error('Tasks not found')
        }

        res.status(200).send(tasks)

    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
}

export const createTaskController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const { title, description, limit_date, creator_user_id  } = req.body

        if (!title || !description || !limit_date || !creator_user_id) {
            errorCode = 422
            throw new Error('Missing parameters to be passed in the body')
        }

        const newTask: Task = {
            id: generateId(),
            title,
            description,
            limit_date,
            creator_user_id,
            status,
        }

        await createTaskRepository(newTask)

        res.status(201).send('Task created successfully')

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const getTaskByIdController = async (req: Request, res: Response) =>  {
    let errorCode = 500

    try {
        const id = req.params.id as string

        const taskUser: UserTask[] = await getTaskByIdRepository()
        const task = taskUser.find((task) => task.creator_user_id === id )

        if (!id) {
            errorCode = 404
            throw new Error('Id not found')
        }

        if (!task) {
            errorCode = 422
            throw new Error('User does not have task')
        }
        
        res.status(200).send(task)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}
