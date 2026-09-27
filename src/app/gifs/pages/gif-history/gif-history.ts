import { Component, effect, inject, Query, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { OrdersService } from 'app/gifs/services/orders.service';
import { Cart } from 'app/gifs/interfaces/cart.interface';
import { OrdersTableRow } from 'app/gifs/components/orders/orders-table/orders-table-row/orders-table-row';

@Component({
  selector: 'app-gif-history',
  imports : [OrdersTableRow],
  templateUrl: './gif-history.html',
})
export default class GifHistory {
  // todo : implementar la busqueda segun el query, e implemetarla con el componente de tabla 
  ordersService = inject(OrdersService);
  order = signal<Cart[]>([]);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map( params => params['query'] )
    )
  ) ; // transformamos el observable en una señal
  // el QUERY ES UN observable, que actualiza los valores que tiene, los actualiza de los valores que emite el Activate Route, es decir actaliza los parametros de la ruta

  constructor() {
    effect( () => {
      this.ordersService.searchClient(this.query() ).subscribe( 
        (resp) => this.order.set(resp)
      )
    })
  }
}
