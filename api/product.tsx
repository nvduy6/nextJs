import { Iproduct } from "../type/product";
import instance from "./instance";
export const add=(product:Iproduct)=>{
    const url = `/products`
    return instance.post("/products",product)
}
export const getAll=(url)=>{
    return instance.get(url)
}
