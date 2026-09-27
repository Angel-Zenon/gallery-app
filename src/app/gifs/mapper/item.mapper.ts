// recibimos el objeto de la api, y regresamos un objeto basado en nuestro tipo/interfaz donde en dicha interfaz especificamos que data queremos

import { Item } from "../interfaces/item.interface";
import { ItemsResponse } from "../interfaces/items-response.interface";

export class ItemMapper {

    static mapProductItemToProduct ( productItem : ItemsResponse) : Item {
        return {
            id : productItem.id,
            title : productItem.title,
            description : productItem.description,
            price : productItem.price,
            category : productItem.category,
            image : productItem.image,
        }
    }

    static mapProductsItemsToProductArray( productItems: ItemsResponse[] ) : Item[] {
        return productItems.map(  this.mapProductItemToProduct );
    }
}