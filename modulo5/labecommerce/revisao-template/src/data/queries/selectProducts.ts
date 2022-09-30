import { Product } from "../../types";
import { connection } from "../connection";

// Essa função está acessando a tabela "labecommerce_products" para pegar todos os produtos.
export const selectProducts = async(): Promise <Product[]> => {
    
    const products = await connection("labecommerce_products")
        .select("labecommerce_products.id","labecommerce_products.name","labecommerce_products.price",
        "labecommerce_products.image_url")

        return products
}

/* Essa função está acessando a tabela "labecommerce_products" para verificar se 
existe um id de produto.*/
export const getProductById = async(productId: string): Promise <Product> => {

    const product = await connection("labecommerce_products")
        .select("labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url")
        .where({id: productId})
    
        return product[0]
}

/* Essa função está acessando a tabela "labecommerce_products" para verificar se 
o nome de um produto já está cadastrado.*/
export const getProductByName = async(name: string): Promise <string> => {

    const [nameProduct] = await connection("labecommerce_products")
        .where({name: name})

        return nameProduct
}