import { User } from "../../types";
import { connection } from "../connection";

// Essa função está inserindo um usuário na tabela "labecommerce_users" 
export const insertUser = async(user: User): Promise <void> => {
    
     await connection("labecommerce_users")
    .insert(user) 
}