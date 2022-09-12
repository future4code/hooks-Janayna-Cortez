import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'
import { getAllUsersRepository, createUserRepository, getUserByIdRepository, editUserRepository } from '../repository/users-repository'
import { User, EditUser } from '../types/types'

export const getAllUsersController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const users = await getAllUsersRepository()

        if (!users) {
            errorCode = 404
            throw new Error('User not found')
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
}

export const createUserController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const { name, nick_name, email } = req.body

        if (!name || !nick_name || !email) {
            errorCode = 422
            throw new Error('Missing parameters to be passed in the body')
        }

        const newUser: User = {
            id: generateId(),
            name,
            nick_name: nick_name,
            email
        }

        await createUserRepository(newUser)

        res.status(201).send('User created successfully')

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const getUserByIdController = async (req: Request, res: Response) =>  {
    let errorCode = 500

    try {
        const id = req.params.id as string

        const user = await getUserByIdRepository(id)

        if (!user.length) {
            errorCode = 404
            throw new Error('User not found')
        }
        
        res.status(200).send(user)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const editUserController = async (req: Request, res: Response) => {
    let errorCode = 500
    
    try {
        const id = req.params.id
        const { name, nick_name } = req.body
        const userEdit: EditUser = {
            name,
            nick_name
        }
 
        if(!name || !nick_name) {
            errorCode = 422
            throw new Error('Missing parameters to be passed in the body')
        }
        
        await editUserRepository(id, userEdit)
        
        res.status(201).send("User edit successfully")

    } catch(e) {
            console.error({e});
            return res.status(500).send("Algo deu errado.");
    }
 }