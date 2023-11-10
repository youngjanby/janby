import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLibModule } from 'my-lib';
import { NavComponent } from './nav/nav.component';
import { PagesModule } from './pages/pages.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoxComponent } from './box/box.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './assets/interceptor';





@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        BoxComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MyInterceptor,
            multi: true
          }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MyLibModule,
        PagesModule,
        FontAwesomeModule,
        MatSlideToggleModule,
        RouterModule
    ]
})
export class AppModule { }
