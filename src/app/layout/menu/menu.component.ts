import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  items: MenuItem[] = [];

ngOnInit(): void {
  this.items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: 'home'
    },
    {
      label: 'Products',
      icon: 'pi pi-fw pi-gift',
      routerLink: 'products'
    },
    {
      label: 'Reviews',
      icon: 'pi pi-fw pi-check',
      routerLink: 'reviews'
    },
    {
      label: 'Account',
      icon: 'pi pi-fw pi-user',
      routerLink: 'account'
    }
  ]
}
}
