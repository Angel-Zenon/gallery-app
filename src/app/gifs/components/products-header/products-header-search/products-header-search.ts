import { Component, inject, output } from '@angular/core';
import { ProductsService } from 'app/gifs/services/products.service';

@Component({
  selector: 'products-header-search',
  imports: [],
  templateUrl: './products-header-search.html',
})
export class ProductsHeaderSearch {
  productService = inject(ProductsService);
  // llamar instancia del singelton del servicio
  

  onSearch(productUId : number) {

    this.productService.loadProducts(productUId);
  }

}
