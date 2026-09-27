import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "environments/environment";
import { ItemsResponse } from "../interfaces/items-response.interface";
import { Item } from "../interfaces/item.interface";
import { ItemMapper } from "../mapper/item.mapper";

@Injectable({
    providedIn : 'root'
}) export class ProductsService {
    private http = inject(HttpClient); // inyectamos la dependencia de el httpclient

    productsList = signal<Item[]>([]); // hacemos una señal, de un arreglo de productos 
    productsListLoading =  signal<boolean>(true); // estatus de carga de nuestros productos
    
    constructor() {
        this.loadProducts(); // actualizamos la lista de productos
    }
    
    loadProducts(id? : number) {
        // * Funcion que hace la peticion y a travez del mapper, obtiene los datos requeridos,en un arreglo.
        if (id && id > 0) this.getProductById(id);
        else this.getAllProducts()
        
    }

    private getProductById(id: number) {
        this.http.get<ItemsResponse>(`${ environment.apiUrl }/products/${id}`)
            .subscribe( (resp) => {
                    const product = ItemMapper.mapProductItemToProduct(resp);
                    this.updateProductList(product);
                }
            )
    }

    private getAllProducts() {
        this.http.get<ItemsResponse[]>(`${ environment.apiUrl }/products`)
            .subscribe( (resp) => {
                    const products = ItemMapper.mapProductsItemsToProductArray(resp);
                    this.updateProductList(products);
                }
            )
    }

    updateProductList(product : Item | Item[]) {
        this.productsListLoading.set(false);
        if (Array.isArray(product)) this.productsList.set(product);
        else  this.productsList.set([product]);
    }
}