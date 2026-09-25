import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeader } from '../../components/side-menu/side-menu-header/side-menu-header';
import { SideMenuOptions } from '../../components/side-menu/side-menu-options/side-menu-options';
import { SideMenuFooter } from '../../components/side-menu/side-menu-footer/side-menu-footer';
import { SideMenu } from '../../components/side-menu/side-menu';

@Component({
  selector: 'dashboard-page',
  imports: [SideMenu, RouterOutlet],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {}
