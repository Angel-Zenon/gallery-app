import { Component, input, Signal } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';
import { Product } from 'app/gifs/interfaces/product.interface';


@Component({
  selector: 'gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
})
// SE CREA UN SERVICIO PARA HACER LA PETICION AL BACKEND CON ESTOS DATOS

export class GifList {
  listProducts  = input<Product[]>(); // obtenemos la señal que nos paso ProductPage, como decimos, es una señal de un arreglo

}
