import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { BrendsComponent } from './pages/brends/brends.component';
import { ProtocolsComponent } from './pages/protocols/protocols.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { BannersComponent } from './pages/banners/banners.component';
import { SeminarsComponent } from './pages/seminars/seminars.component';
import { PromocodesComponent } from './pages/promocodes/promocodes.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { Paths } from './assets/paths';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/' + Paths.Products, pathMatch: 'full'},
  {path: Paths.Products, component: ProductsComponent},
  {path: Paths.Users, component: UsersComponent},
  {path: Paths.Categories, component: CategoriesComponent},
  {path: Paths.Cities, component: CitiesComponent},
  {path: Paths.Brends, component: BrendsComponent},
  {path: Paths.Protocols, component: ProtocolsComponent},
  {path: Paths.Orders, component: OrdersComponent},
  {path: Paths.Banners, component: BannersComponent},
  {path: Paths.Seminars, component: SeminarsComponent},
  {path: Paths.Promocodes, component: PromocodesComponent},
  {path: Paths.Login, component: LoginComponent},
  {path: Paths.Register, component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
