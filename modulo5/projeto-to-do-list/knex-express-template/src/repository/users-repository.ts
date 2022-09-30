import { connection } from '../data/connection'
import { User, EditUser } from '../types/types'

export const getAllUsersRepository = async () => {
   try {
      return await connection('registration')
                     .select()

   } catch(error: any) {
      return error.message
   }
}

export const createUserRepository = async (user: User) => {
    try {
       return await connection('registration')
                     .insert(user)

    } catch (error: any) {
       return error.message
    }
 }

 export const getUserByIdRepository = async (id: string) => {
   try {
      return await connection('registration')
                     .select()
                     .where('id', id)

   } catch (error: any) {
      return error.message
   }
 }

 export const editUserRepository = async (id: string, userEdit: EditUser) => {
   try {
       return await connection('registration')
                     .update(userEdit)
                     .where('id', id)
       
   } catch(error: any) {
       return error.message
   }
}