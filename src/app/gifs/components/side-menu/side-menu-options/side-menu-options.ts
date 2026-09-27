import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OrdersService } from 'app/gifs/services/orders.service';



interface MenuOption {
  label : string,
  subLabel :  string,
  route : string,
  icon : string
}
@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {
  // acceder a searchHistoryKeys
  
  menuOptions = signal<MenuOption[]>([
    {
      icon : 'fa-solid fa-shirt', 
      label : 'Products',
      subLabel : 'Tus productos',
      route : '/dashboard/products'
    },
    {
      icon : 'fa-solid fa-shop', 
      label : 'Sales',
      subLabel : 'Ventas',
      route : '/dashboard/sales'
    },
    {
      icon : 'fa-solid fa-shop', 
      label : 'Orders',
      subLabel : 'Ordenes',
      route : '/dashboard/orders'
    }
  ] );
  
  orderService = inject(OrdersService);
  history = signal(this.orderService.searchHistoryKeys());

}
