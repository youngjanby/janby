import {Component, Injectable, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Catalog, SubCatalog} from "./interfaces/interfaces";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faAnglesRight, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'my-lib-mini-table',
  templateUrl: './mini-table.component.html',
  styleUrl: './mini-table.component.css'
})
export class MiniTableComponent {
  @Input() dataSubCategory: SubCatalog[] = []
  @Input() dataCategory: Catalog[] = []

  formCategories: FormGroup = new FormGroup({
    nameCategory: new FormControl('', [Validators.required]),
    nameSubCategory: new FormControl('', [Validators.required])
  })
  trashIcon: IconProp = faTrash
  arrowIcon: IconProp = faAnglesRight
  isActive: boolean = false

  currentSubCategories: SubCatalog[] = []
  selectedData: Catalog[] = []


  selectData(data: Catalog): void {
    this.isActive = true
    this.selectedData = [data]
    this.currentSubCategories = this.dataSubCategory.filter((c) => {
      return c.catalog_product.id === data.id
    })
  }

  addSubCategory(): void {
    this.dataSubCategory.unshift({
      id: crypto.randomUUID(),
      name: this.formCategories.controls['nameSubCategory'].value,
      catalog_product: {
        id: this.selectedData[0].id
      }
    })
    return this.selectData(this.currentCategory)
  }

  addCategory() {
    this.dataCategory.unshift({
      id: crypto.randomUUID(),
      name: this.formCategories.controls['nameCategory'].value
    })
  }

  deleteCategory(dataId: string): Catalog[] {
    if(this.currentCategory && this.currentCategory.id === dataId) this.resetCategory()
    return this.dataCategory = this.dataCategory.filter(c => {
      return c.id !== dataId
    })
  }

  deleteSubCategory(dataId: string) {
    this.dataSubCategory = this.dataSubCategory.filter(c => {
      return c.id !== dataId
    })
    return this.selectData(this.currentCategory)
  }

  resetCategory(): void {
    this.selectedData = []
  }

  get currentCategory(): Catalog {
    return this.selectedData[0]
  }
}


