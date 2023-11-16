import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavToolComponent } from './nav-tool/nav-tool.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogWindow } from './table/dialog/dialog-edit-data';
import { TableComponent } from './table/table/table.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MyLibComponent,
    NavToolComponent,
    TableComponent,
    DialogWindow
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatCheckboxModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    MyLibComponent,
    NavToolComponent,
    TableComponent
  ]
})
export class MyLibModule { }
