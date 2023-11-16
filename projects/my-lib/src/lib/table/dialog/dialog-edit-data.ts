import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { faImage, faLink, faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import { Product } from "../../asserts/interfaces";

@Component({
    selector: 'dialog-edit-data',
    templateUrl: 'dialog-edit-data.html',
    styleUrls: ['dialog-edit-data.scss'],
  })
  export class DialogWindow implements OnInit {
  productIndex: number = -1;
    constructor(
      public dialogRef: MatDialogRef<DialogWindow, {product: Product | null, index: number}>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit(): void {
      let productData = this.data;
      this.product = productData.product;
      this.productIndex = productData.index;
      console.log(this.data.product)
    }


    image: IconProp = faImage;
    deleteIcon: IconProp = faTrash;
    linkAccess: IconProp = faLink
    product: any = []
    createForm: FormGroup<any> = new FormGroup({
      nameFrom1C: new FormControl(this.data.product.nameFrom1C),
      name: new FormControl(this.data.product.name, [Validators.required]),
      brend: new FormControl(this.data.product.brand.name, [Validators.required]),
      Article: new FormControl(this.data.product.codeFrom1C),
      description: new FormControl(this.data.product.description, [Validators.required]),
      images: new FormControl(''),
      price: new FormControl(this.data.product.price),
      category: new FormControl(this.data.product.category, [Validators.required]),
      subcategory: new FormControl(this.data.product.subCategory, [Validators.required]),
      volume: new FormControl(this.data.product.volume, [Validators.required]),
      characterName: new FormControl(this.data.product.characterName, [Validators.required]),
      characterValue: new FormControl(this.data.product.characterValue, [Validators.required])
    });
    addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: any[] = this.data.product.tags
  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.fruits.push({name: value});
    }
    event.chipInput!.clear();
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(fruit);
      return;
    }

    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  
    delete() {
      this.dialogRef.close(this.data)
    }

    deleteImg(img: any, index: number) {
      let currentIndex: number = index--
      this.data.product.images.splice(currentIndex, 1)
    }

    addImage() {
      const value = this.createForm.controls['images'].value
      if(value) {
        this.data.product.images.push({name: this.createForm.controls['images'].value})
      }
    }

    save() {
      const form = this.createForm;
      const getFormValue = (key: string): string => {
        const value = form.get(key)?.value;
        return value ?? '';
      }

      const productData: any = {
        id: this.data.product.id,
        name: getFormValue('name'),
        nameFrom1C: getFormValue('nameFrom1C'),
        codeFrom1C: getFormValue('Article'),
        price: parseFloat(getFormValue('price')),
        volume: getFormValue('volume'),
        isReady: false,
        isRetailAllowed: true,
        completed: true,
        description: getFormValue('description'),
        category: getFormValue('category'),
        subCategory: getFormValue('subсategory'),
        characterName: getFormValue('characterName'),
        characterValue: getFormValue('characterValue'),
        tags: [...this.fruits],
        brand: {
          id: this.data.product.brand.id,
          name: getFormValue('brend'),
          icon: this.data.product.brand.icon,
        },
        images: [...this.data.product.images]
      }
      this.dialogRef.close({
        product: productData, 
        index: this.productIndex
      });
    }
  }
