import { Component, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list/gif-list';
import { ItemDetails } from 'app/gifs/interfaces/item-details.interface';
import { ProductsHeader } from 'app/gifs/components/products-header/products-header';


const listItems : ItemDetails[] = [
    {alt : 'Conjuto de telar de pedal', src : '/images/img01.jpg'}, 
    {alt : 'Vestido teñido natural', src : '/images/img02.jpg'}, 
    {alt : 'Blusa teñido natural', src : '/images/img03.jpg'}, 
    {alt : 'Vestido teñido natural', src : '/images/img04.jpg'}, 
  ]


@Component({
  selector: 'app-products-page',
  imports: [GifList, ProductsHeader],
  templateUrl: './products-page.html',
})
export default class ProductsPage {
  items = signal(listItems);
}
