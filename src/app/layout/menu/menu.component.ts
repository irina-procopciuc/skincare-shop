import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RoutesEnum } from 'src/app/shared/enums/routes/routes.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.createMenuItems();
  }

  private createMenuItems(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: RoutesEnum.HOME_ROUTE,
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-gift',
        routerLink: RoutesEnum.PRODUCTS_ROUTE,
      },
      {
        label: 'Reviews',
        icon: 'pi pi-fw pi-check',
        routerLink: RoutesEnum.REVIEWS_ROUTE,
      },
      // {
      //   label: 'Account',
      //   icon: 'pi pi-fw pi-user',
      //   routerLink: RoutesEnum.ACCOUNT_ROUTE,
      // },
      {
        label: 'Cart',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: RoutesEnum.CART_ROUTE,
      },
    ];
  }
}
