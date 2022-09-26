import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Purchase } from "../types";
import {v4 as generateId} from 'uuid';

export const createPurchases = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400

	try {
        const {user_id, product_id, quantity} = req.body;
        if (!user_id || !product_id || !quantity || quantity <= 0) throw new Error ("Você deve informar o ID do usuário e do produto, além da quantidade.");

        // Verificando usúario
        const verifyUser = await connection("labecommerce_users")
            .select("*")
            .where({ id: user_id });
        if (!verifyUser.length) {
            errorCode = 404;
            throw new Error ("Usuário não encontrado.");
        };

        // Verificando produto
        const verifyProduct = await connection("labecommerce_products")
            .select("*")
            .where({ id: product_id });
        if (!verifyProduct.length) {
            errorCode = 404;
            throw new Error ("Produto não encontrado.");
        };

        const total_price = verifyProduct[0].price * quantity

        const newPurchase: Purchase = {
            id: generateId(),
            user_id,
            product_id,
            quantity,
            total_price,
        };

        await connection("labecommerce_purchases")
            .insert(newPurchase);

        res.status(201).send("Compra registrada com sucesso.");
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};
