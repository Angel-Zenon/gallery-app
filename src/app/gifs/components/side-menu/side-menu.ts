import { Component } from '@angular/core';
import { SideMenuOptions } from './side-menu-options/side-menu-options';
import { SideMenuFooter } from './side-menu-footer/side-menu-footer';
import { SideMenuHeader } from './side-menu-header/side-menu-header';



@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuOptions, SideMenuFooter, SideMenuHeader],
  templateUrl: './side-menu.html',
})
export class SideMenu {
  
}
