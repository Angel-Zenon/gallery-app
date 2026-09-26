import { Component, inject } from '@angular/core';
import { OrdersPageHeader } from 'app/gifs/components/orders/orders-page-header/orders-page-header';
import { OrdersPageTable } from 'app/gifs/components/orders/orders-page-table/orders-page-table';
import { OrdersService } from 'app/gifs/services/orders.service';


@Component({
  selector: 'orders-page',
  imports: [OrdersPageHeader, OrdersPageTable],
  templateUrl: './orders-page.html',
})
export default class OrdersPage {
  // instanciar servicio de orders
  ordersService  = inject(OrdersService);
  
}
