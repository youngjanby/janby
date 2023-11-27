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
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IconFormComponent } from './icon-form/icon-form.component';
import { InputFormComponent } from './input-form/input-form.component';
import { AddInputComponent } from './add-input/add-input.component';
import TagsComponent from './tags/tags.component';
import {MiniTableComponent} from "./mini-table/mini-table.component";


@NgModule({
  declarations: [
    MyLibComponent,
    NavToolComponent,
    TableComponent,
    DialogWindow,
    IconFormComponent,
    InputFormComponent,
    AddInputComponent,
    TagsComponent,
    MiniTableComponent
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
    TableComponent,
    MiniTableComponent
  ]
})
export class MyLibModule { }
