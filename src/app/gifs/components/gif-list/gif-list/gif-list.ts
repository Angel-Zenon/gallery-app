import { Component, input } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';
import { ItemDetails } from 'app/gifs/interfaces/item-details.interface';


@Component({
  selector: 'gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
})
// SE CREA UN SERVICIO PARA HACER LA PETICION AL BACKEND CON ESTOS DATOS

export class GifList {
  listItems = input.required<ItemDetails[]>()
}
