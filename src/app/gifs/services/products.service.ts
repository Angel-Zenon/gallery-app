import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "environments/environment";
import { ProductsResponse } from "../interfaces/products.interface";
import { Product } from "../interfaces/product.interface";
import { ProductMapper } from "../mapper/product.mapper";

@Injectable({
    providedIn : 'root'
}) export class ProductsService {
    private http = inject(HttpClient); // inyectamos la dependencia de el httpclient

    productsList = signal<Product[]>([]); // hacemos una señal, de un arreglo de productos 
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
        this.http.get<ProductsResponse>(`${ environment.apiUrl }/products/${id}`)
            .subscribe( (resp) => {
                    const product = ProductMapper.mapProductItemToProduct(resp);
                    this.updateProductList(product);
                }
            )
    }

    private getAllProducts() {
        this.http.get<ProductsResponse[]>(`${ environment.apiUrl }/products`)
            .subscribe( (resp) => {
                    const products = ProductMapper.mapProductsItemsToProductArray(resp);
                    this.updateProductList(products);
                }
            )
    }

    updateProductList(product : Product | Product[]) {
        this.productsListLoading.set(false);
        if (Array.isArray(product)) this.productsList.set(product);
        else  this.productsList.set([product]);
    }
}