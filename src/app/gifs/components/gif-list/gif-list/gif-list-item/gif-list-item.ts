import { Component, input } from '@angular/core';
import { ItemDetails } from 'app/gifs/interfaces/item-details.interface';



@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifListItem {
  item = input.required<ItemDetails>();

}
