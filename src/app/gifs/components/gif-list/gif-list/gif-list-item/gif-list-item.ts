import { Component, input } from '@angular/core';
import { Item } from 'app/gifs/interfaces/item.interface';



@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifListItem {
  product = input.required<Item>();

}
