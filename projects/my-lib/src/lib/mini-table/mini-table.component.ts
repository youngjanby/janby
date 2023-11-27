import {Component, Injectable, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Catalog, SubCatalog} from "./interfaces/interfaces";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'my-lib-mini-table',
  templateUrl: './mini-table.component.html',
  styleUrl: './mini-table.component.css'
})
export class MiniTableComponent {
  @Input() dataSubCategory: SubCatalog[] = []
  @Input() dataCategory: Catalog[] = []

  addForm: FormGroup = new FormGroup({
    nameCategory: new FormControl('')
  })
  trashIcon: IconProp = faTrash
  editIcon: IconProp = faEdit


}

