import { ProductCart } from "./product-cart.interface"

// interfaz de los datos del carrito que vamos a manejar
export interface Cart {
    id : number,
    products :  ProductCart[],
    total :  number,
    discountedTotal : number
    totalProducts : number,
    totalQuantity : number,
    userId : number
}
