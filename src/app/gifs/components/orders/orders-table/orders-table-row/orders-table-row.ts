import { Component, input } from '@angular/core';
import { Cart } from 'app/gifs/interfaces/cart.interface';

@Component({
  selector: 'tr[orders-table-row]',
  imports: [],
  templateUrl: './orders-table-row.html',
  host: {
    'class': '*:text-gray-900 *:first:font-medium',
    'data-customer-row': '',
    'data-customer-status': 'active',
  },
})
export class OrdersTableRow {
  cart = input.required<Cart>();
}
