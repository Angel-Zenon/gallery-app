import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



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
  menuOptions:MenuOption[] = [
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
  ] 
}
