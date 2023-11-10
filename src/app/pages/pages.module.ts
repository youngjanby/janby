import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { CitiesComponent } from './cities/cities.component';
import { BrendsComponent } from './brends/brends.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { OrdersComponent } from './orders/orders.component';
import { BannersComponent } from './banners/banners.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { PromocodesComponent } from './promocodes/promocodes.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MyLibModule } from 'my-lib';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
    declarations: [
        ProductsComponent,
        UsersComponent,
        CategoriesComponent,
        CitiesComponent,
        BrendsComponent,
        ProtocolsComponent,
        OrdersComponent,
        BannersComponent,
        SeminarsComponent,
        PromocodesComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        MatPaginatorModule,
        MyLibModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class PagesModule { }
