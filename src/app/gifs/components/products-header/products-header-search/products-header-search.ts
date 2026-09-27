import { Component, input, output } from '@angular/core';

@Component({
  selector: 'products-header-search',
  imports: [],
  templateUrl: './products-header-search.html',
})
export class ProductsHeaderSearch {
  
  searchComponent = input.required<string>();
  searchType = input.required<string>();

  // llamar instancia del singelton del servicio
  searchId = output<number>();

  onSearch(id : number) {
    this.searchId.emit(id);
  }

}
