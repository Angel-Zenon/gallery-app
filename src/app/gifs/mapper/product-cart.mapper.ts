import { ProductCartResponse } from "../interfaces/carts-response.interface";
import { ProductCart } from "../interfaces/product-cart.interface";


export class ProductCartMapper {

    static mapProductCartResponseToProduct ( productResponse : ProductCartResponse) : ProductCart{
        // funcion que convierte el producto de una lista de productos de un carrito
        return {
            id : productResponse.id,
            title : productResponse.title,
            quantity : productResponse.quantity,
            price : productResponse.price,
            discountPercentage : productResponse.discountPercentage,
            discountedTotal : productResponse.discountedTotal,
            total : productResponse.total,
        }
    }

    static mapProductsCartResponseToProducts( productsItemsResponse : ProductCartResponse[] ) : ProductCart[] {
        return productsItemsResponse.map( this.mapProductCartResponseToProduct )
    }
}