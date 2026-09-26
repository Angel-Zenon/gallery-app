import { Component } from '@angular/core';
import {  TableHead } from './table-head/table-head';
import { TableBody } from './table-body/table-body';

@Component({
  selector: 'orders-page-table-body',
  imports: [TableHead, TableBody],
  templateUrl: './orders-page-table-body.html',
})
export class OrdersPageTableBody {}
