import { Component } from '@angular/core';
import { OrdersPageHeader } from 'app/gifs/components/orders/orders-page-header/orders-page-header';
import { OrdersPageTable } from 'app/gifs/components/orders/orders-page-table/orders-page-table';


@Component({
  selector: 'orders-page',
  imports: [OrdersPageHeader, OrdersPageTable],
  templateUrl: './orders-page.html',
})
export default class OrdersPage {

}
