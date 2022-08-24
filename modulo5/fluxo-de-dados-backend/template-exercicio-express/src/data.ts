type Products = {
    id: string,
    name: string,
    price: number
}

export const errors ={
    ID_NOT_FOUND:{status: 404, message:"id nao encontrado"},
    MISSING_PARAMETERS:{status: 404, message:"Faltando parametro"},

}

export const products: Products[] = [{
    id: "123e4567-e89b-12d3-a456-426655440000",
    name: "Boné Green Bad Boy",
    price: 190
}, {
    id: "123e4567-e89b-12d3-a456-426655440001",
    name: "Boné New England Patriots",
    price: 110
}, {
    id: "123e4567-e89b-12d3-a456-426655440002",
    name: "Boné Blue Nike Sports",
    price: 140
}]