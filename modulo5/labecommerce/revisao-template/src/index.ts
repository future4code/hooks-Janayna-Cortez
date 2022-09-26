import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { createProduct } from "./endpoints/createProduct"
import { createPurchases } from "./endpoints/createPurchases"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getPurchasesByUserId } from "./endpoints/getPurchasesByUserId"

// Endpoint que pega todos os usuários
app.get("/users", getAllUsers)
// Endpoint que pega todas as compra de um usuário pelo user_id
app.get("/users/:userId/purchases", getPurchasesByUserId)
// Endpoint que cria um usuário
app.post("/users", createUser)
//Endpoint que pega todos os produtos 
app.get("/products", getAllProducts)
//Endpoint que cria um produto
app.post("/products", createProduct)
// Endpoint que realiza uma compra
app.post("/purchases", createPurchases)