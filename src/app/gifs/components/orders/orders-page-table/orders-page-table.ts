import { Component } from '@angular/core';
import { OrdersPageTableHeader } from './orders-page-table-header/orders-page-table-header';
import { OrdersPageTableBody } from './orders-page-table-body/orders-page-table-body';

@Component({
  selector: 'orders-page-table',
  imports: [OrdersPageTableHeader, OrdersPageTableBody],
  templateUrl: './orders-page-table.html',
})
export class OrdersPageTable {}
