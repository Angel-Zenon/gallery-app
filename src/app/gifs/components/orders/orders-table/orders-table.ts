import { Component, inject } from '@angular/core';
import { OrdersService } from 'app/gifs/services/orders.service';
import { OrdersTableHeader } from './orders-table-header/orders-table-header';
import { OrdersTableRow } from './orders-table-row/orders-table-row';

@Component({
  selector: 'orders-table',
  imports: [OrdersTableHeader, OrdersTableRow],
  templateUrl: './orders-table.html',
})
export class OrdersTable {
  ordersService = inject(OrdersService);

  constructor (){
    this.ordersService.getData()
  }
}
