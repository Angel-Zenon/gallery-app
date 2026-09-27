import { Component, inject } from '@angular/core';
import { OrdersHeader } from 'app/gifs/components/orders/orders-header/orders-header';
import { OrdersTable } from 'app/gifs/components/orders/orders-table/orders-table';
import { OrdersService } from 'app/gifs/services/orders.service';

@Component({
  selector: 'orders-page',
  imports: [OrdersHeader, OrdersTable],
  templateUrl: './orders-page.html',
})
export default class OrdersPage {
  // instanciar servicio de orders
  ordersService = inject(OrdersService);
}
