import { Request, Response } from "express";
import { connection } from "../data/connection";
import {v4 as generateId} from 'uuid';
import {User} from "../types"


export const createUser = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400
	try {
        const {name, email, password} = req.body;
        if (!name || !email || !password) throw new Error ("Você deve informar nome, e-mail e senha.");
        if (password.search("@") === false) throw new Error ("Forneça um endereço de e-mail válido.");

        const verifyEmail = await connection("labecommerce_users")
            .select("*")
            .where({ email });
        if (verifyEmail.length) {
            errorCode = 406;
            throw new Error ("E-mail já registrado.");
        };

        const newUser: User = {
            id: generateId(),
            name,
            email,
            password
        };

        await connection("labecommerce_users")
            .insert(newUser);

        res.status(201).send("Usuário cadastrado com sucesso.");
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};