import { Component, inject } from '@angular/core';
import { OrdersService } from 'app/gifs/services/orders.service';
import { ProductsHeaderSearch } from 'app/gifs/components/products-header/products-header-search/products-header-search';

@Component({
  selector: 'orders-table-header',
  imports: [ProductsHeaderSearch],
  templateUrl: './orders-table-header.html',
})
export class OrdersTableHeader {
  componentTitle = 'orders';
  componentSearch = 'Search order by user id'
  orderService = inject(OrdersService);

  // funcion que imprime en consola 
  imprimirOrder(id : number) {
    if (id > 0) {
      this.orderService.searchClientCarts(id).subscribe(
        (resp) => this.orderService.orders.set(resp)
      )
    } else this.orderService.getData();
  }
}
