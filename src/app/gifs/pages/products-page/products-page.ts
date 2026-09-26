import { Component, inject, Signal, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list/gif-list';
import { ProductsHeader } from 'app/gifs/components/products-header/products-header';
import { ProductsService } from 'app/gifs/services/products.service';
import { Product } from 'app/gifs/interfaces/product.interface';




@Component({
  selector: 'products-page',
  imports: [GifList, ProductsHeader],
  templateUrl: './products-page.html',
})
export default class ProductsPage {
  productsService = inject( ProductsService ); // llamamos a la instancia del servicio, 
  products = this.productsService.productsList; // accedemos a los items, los cualees son los productos, esto es una señal de un arreglo

}
