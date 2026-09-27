import { Cart } from "../interfaces/cart.interface";
import { CartItemResponse, CartsResponse } from "../interfaces/carts-response.interface";
import { ProductCartMapper } from "./product-cart.mapper";

export class CartMapper {

    static mapCartItemResponseToCart( carItem : CartItemResponse) : Cart {
        // funcion que retorna el carrito con los datos que necesitamos
        return {
            id : carItem.id,
            products : ProductCartMapper.mapProductsCartResponseToProducts(carItem.products), // implementar el mapper d productos,
            total : carItem.total,
            discountedTotal : carItem.discountedTotal,
            totalProducts :  carItem.totalProducts,
            totalQuantity :  carItem.totalQuantity,
            userId : carItem.userId
        }
    }   

    static mapCartItemsResponseToCartItems( cartItems : CartItemResponse[]  ) : Cart[] {
        return cartItems.map( this.mapCartItemResponseToCart )
    }
}