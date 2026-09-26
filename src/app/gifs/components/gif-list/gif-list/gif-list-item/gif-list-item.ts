import { Component, input } from '@angular/core';
import { Product } from 'app/gifs/interfaces/product.interface';



@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifListItem {
  product = input.required<Product>();

}
