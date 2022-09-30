import { connection } from '../data/connection'
import { Task } from '../types/types'

export const getAllTasksRepository = async () => {
   try {
      return await connection('tasks')
                     .select()

   } catch(error: any) {
      return error.message
   }
}

export const createTaskRepository = async (task: Task ) => {
   try {
      return await connection('tasks')
                     .insert(task)
      
   } catch (error: any) {
      return error.message
   }
}

export const getTaskByIdRepository = async () => {
   try {
      return await connection
                     .select('tasks.id as id_tasks', 'tasks.title', 'tasks.description', 'tasks.limit_date', 'tasks.status', 'registration.id as creator_user_id',  'registration.name', 'registration.nick_name as creator_nick_name')
                     .from('tasks')
                     .join('registration', function() {
                        this
                        .on('tasks.creator_user_id', '=', 'registration.id')
                     })

   } catch (error: any) {
      return error.message
   }
 }