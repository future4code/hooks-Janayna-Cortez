import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getPurchasesByUserId = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const user_id = req.params.userId;

        const allPurchases = await connection("labecommerce_purchases")
            .select("*")
            .where({ user_id });
        if (!allPurchases.length) {
            errorCode = 404;
            throw new Error ("Nenhuma compra encontrada.");
        };

        res.status(200).send(allPurchases);
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};