import { Component, computed, effect, inject, output, signal } from '@angular/core';
import { ProductsHeaderSearch } from './products-header-search/products-header-search';
import { Product } from 'app/gifs/interfaces/product.interface';
import { ProductsService } from 'app/gifs/services/products.service';

@Component({
  selector: 'products-header',
  imports: [ProductsHeaderSearch],
  templateUrl: './products-header.html',
})
export class ProductsHeader {


}
