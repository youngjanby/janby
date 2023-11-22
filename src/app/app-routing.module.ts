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
import {AuthGuardService} from "./pages/auth/auth-guard.service";

const routes: Routes = [
  {path: '', redirectTo: '/' + Paths.Products, pathMatch: 'full'},
  {path: Paths.Products, component: ProductsComponent, canActivate: [AuthGuardService]},
  {path: Paths.Users, component: UsersComponent, canActivate: [AuthGuardService]},
  {path: Paths.Categories, component: CategoriesComponent, canActivate: [AuthGuardService]},
  {path: Paths.Cities, component: CitiesComponent, canActivate: [AuthGuardService]},
  {path: Paths.Brends, component: BrendsComponent, canActivate: [AuthGuardService]},
  {path: Paths.Protocols, component: ProtocolsComponent, canActivate: [AuthGuardService]},
  {path: Paths.Orders, component: OrdersComponent, canActivate: [AuthGuardService]},
  {path: Paths.Banners, component: BannersComponent, canActivate: [AuthGuardService]},
  {path: Paths.Seminars, component: SeminarsComponent, canActivate: [AuthGuardService]},
  {path: Paths.Promocodes, component: PromocodesComponent, canActivate: [AuthGuardService]},
  {path: Paths.Login, component: LoginComponent},
  {path: Paths.Register, component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
