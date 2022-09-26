import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllUsers = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const allUsers = await connection("labecommerce_users").select("*");
        if (!allUsers.length) {
            errorCode = 500;
            throw new Error ("Erro de Servidor. Tente novamente mais tarde.");
        };

        const selectPurchases = await connection("labecommerce_purchases")
        .select("*")

        const userWithPurchases = allUsers.map((user) => {
            const userPurchases = selectPurchases.filter((item) => {
                return item.user_id === user.id
            });

            const newUser = {...user, purchases: userPurchases};

            return newUser;
        });
        if (!userWithPurchases.length) {
            errorCode = 500;
            throw new Error ("Erro de Servidor. Tente novamente mais tarde.");
        };

        res.status(200).send(userWithPurchases);
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};