import express, { Request, Response } from "express"
import cors from "cors"
import { users } from "./exe3"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
    
    try{
        res.status(200).send(users)
    }
    catch(err){
        res.status(400).end("Usuários não encontrados")
    }
})



app.listen(3003, () => {
    console.log("Servidor Ok")
})