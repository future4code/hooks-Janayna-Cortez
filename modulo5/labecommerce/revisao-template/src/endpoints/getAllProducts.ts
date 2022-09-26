import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllProducts = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const order = req.query.order as string;
        const search = req.query.search as string;

        let products;

        if (order && order !== "asc" && order !== "desc") throw new Error ("A ordem deve ser ascendente ou descendente.");

        if (!search) {

            if (!order) {

                products = await connection("labecommerce_products")
                    .select("*");

                if (!products.length) {
                    errorCode = 404;
                    throw new Error ("Erro de Servidor.Tente novamente mais tarde.");
                };
                res.status(200).send(products);

            } else if (order) {

                products = await connection("labecommerce_products")
                    .select("*")
                    .orderBy("name", `${order}`);

                if (!products.length) {
                    errorCode = 500;
                    throw new Error ("Erro de Servidor.Tente novamente mais tarde.");
                };
                res.status(200).send(products);

            }

        } else if (search) {

            if (!order) {

                products = await connection("labecommerce_products")
                    .select("*")
                    .where({name: search})
                    .orWhere('name', 'LIKE', `%${search}%`);

                if (!products.length) {
                    errorCode = 404;
                    throw new Error ("No products found under this search.");
                };
                res.status(200).send(products);

            } else if (order) {

                products = await connection("labecommerce_products")
                    .select("*")
                    .where({name: search})
                    .orWhere('name', 'LIKE', `%${search}%`)
                    .orderBy("name", `${order}`);

                if (!products.length) {
                    errorCode = 500;
                    throw new Error ("Nenhum produto encontrado.");
                };
                res.status(200).send(products);

            }
        }
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};