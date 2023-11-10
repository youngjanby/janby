import { Component } from '@angular/core';
import { faBagShopping, faClipboard, faDatabase, faDollarSign, faFolder, faMap, faRightFromBracket, faStar, faTable, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { Paths } from '../assets/paths';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  data = [
    {
      name: 'Авторизация',
      link: '/' + Paths.Login,
      icon: faRightFromBracket
    },
    {
      name: 'Продукты',
      link: '/' + Paths.Products,
      icon: faBagShopping,
    },
    {
      name: 'Пользователи',
      link: '/' + Paths.Users,
      icon: faUser,
    },
    {
      name: 'Категории',
      link: '/' + Paths.Categories,
      icon: faFolder,
    },
    {
      name: 'Города',
      link: '/' + Paths.Cities,
      icon: faMap,
    },
    {
      name: 'Бренды',
      link: '/' + Paths.Brends,
      icon: faStar,
    },
    {
      name: 'Протоколы',
      link: '/' + Paths.Protocols,
      icon: faDatabase,
    },
    {
      name: 'Заказы',
      link: '/' + Paths.Orders,
      icon: faTag,
    },
    {
      name: 'Баннеры',
      link: '/' + Paths.Banners,
      icon: faClipboard,
    },
    {
      name: 'Семинары',
      link: '/' + Paths.Seminars,
      icon: faTable,
    },
    {
      name: 'Промокоды',
      link: '/' + Paths.Promocodes,
      icon: faDollarSign,
    },
  ];
}
