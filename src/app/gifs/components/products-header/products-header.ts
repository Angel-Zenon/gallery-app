import { Component, inject} from '@angular/core';
import { ProductsHeaderSearch } from './products-header-search/products-header-search';
import { ProductsService } from 'app/gifs/services/products.service';


@Component({
  selector: 'products-header',
  imports: [ProductsHeaderSearch],
  templateUrl: './products-header.html',
})
export class ProductsHeader {

  productsService = inject(ProductsService);

}
