import { Component } from '@angular/core';
import { ProductsHeaderSearch } from './products-header-search/products-header-search';

@Component({
  selector: 'products-header',
  imports: [ProductsHeaderSearch],
  templateUrl: './products-header.html',
})
export class ProductsHeader {}
