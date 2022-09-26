import { Product } from "../../types";
import { connection } from "../connection";

// Essa função está inserindo um produto na tabela "labecommerce_products"
export const insertProduct = async (product: Product): Promise<void> => {
  await connection("labecommerce_products").insert({
    id: product.id,
    name: product.name,
    price: product.price,
    image_url: product.imageUrl,
  });
};