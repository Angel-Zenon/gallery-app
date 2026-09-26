// recibimos el objeto de la api, y regresamos un objeto basado en nuestro tipo/interfaz donde en dicha interfaz especificamos que data queremos

import { Product } from "../interfaces/product.interface";
import { ProductsResponse } from "../interfaces/products.interface";

export class ProductMapper {

    static mapProductItemToProduct ( productItem : ProductsResponse) : Product {
        return {
            id : productItem.id,
            title : productItem.title,
            description : productItem.description,
            price : productItem.price,
            category : productItem.category,
            image : productItem.image,
        }
    }

    static mapProductsItemsToProductArray( productItems: ProductsResponse[] ) : Product[] {
        return productItems.map(  this.mapProductItemToProduct );
    }
}