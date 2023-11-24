import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { faImage, faLink, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Fruit, Image, Product, ProductData, ProductForm, dataPropsInDialog } from '../../asserts/interfaces';
import { TypeEnum } from '../../add-input/add-input.component';
import { group } from '@angular/animations';


@Component({
  selector: 'dialog-edit-data',
  templateUrl: 'dialog-edit-data.html',
  styleUrls: ['dialog-edit-data.scss'],
})
export class DialogWindow implements OnInit {
  productIndex = -1;
  name = 'name';
  image = faImage;
  deleteIcon = faTrash;
  linkAccess = faLink;
  product = this.data.product

  createForm: FormGroup<ProductForm>

  TypeEnum = TypeEnum
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = this.data.product.tags;
  announcer = inject(LiveAnnouncer);

  constructor(
    public dialogRef: MatDialogRef<
      DialogWindow,
      { product: ProductData; index: number }
    >,
    @Inject(MAT_DIALOG_DATA) public data: dataPropsInDialog
  ) {
    this.createForm = new FormGroup<ProductForm>({
      //@ts-expect-error
      nameFrom1C: new FormControl(this.data.product.nameFrom1C),
      //@ts-expect-error
      name: new FormControl(this.data.product.name, [Validators.required]),
      //@ts-expect-error
      brand: new FormControl(this.data.product.brand.name, [Validators.required]),
      //@ts-expect-error
      Article: new FormControl(this.data.product.codeFrom1C),
      //@ts-expect-error
      description: new FormControl(this.data.product.description),
      //@ts-expect-error
      price: new FormControl(this.data.product.price),
      //@ts-expect-error
      categories: new FormGroup({
        key: new FormControl(this.data.product.categories.name),
        value: new FormControl(this.data.product.categories.value),
      }),
      //@ts-expect-error
      volumes: new FormArray([]),
      //@ts-expect-error
      characters: new FormArray([]),
    });
  }

  ngOnInit(): void {
    this.product = this.data.product;
    this.productIndex = this.data.index;

    this.data.product.characters.forEach((character: any) => {
      this.characters.push(
        new FormGroup({
          key: new FormControl<string>(character.key, [
            Validators.required,
          ]),
          value: new FormControl<string>(character.value, [
            Validators.required,
          ]),
        })
      );
    });

    this.data.product.volumes.forEach((v) => {
      this.volumes.push(
        //@ts-expect-error
        new FormGroup({
          volume: new FormControl(v.volume, Validators.required), // Предполагаем, что volume может быть не определенным
        })
      );
      console.log(this.volumes);
      
    });
  }

  delete() {
    console.log(this.createForm);
    
    this.dialogRef.close(this.data);
  }

  saveNewImages(dataImg: Image[]) {
    console.log(this.data.product.images)
    return this.data.product.images = dataImg
  }

  save() {
    const form = this.createForm;
    const getFormValue = (key: string): string => {
      const value = form.get(key)?.value;
      return value ?? '';
    };

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
      categories: {name: this.createForm.controls['categories'].controls['key'].value, value: this.createForm.controls['categories'].controls['value'].value},
      characters: this.characters.controls.map((group: FormGroup) => {
        return { key: group.get('key')?.value, value: group.get('value')?.value }
      }),
      tags: [...this.fruits],
      brand: {
        id: this.data.product.brand.id,
        name: getFormValue('brand'),
        icon: this.data.product.brand.icon,
      },
      images: [...this.data.product.images],
      volumes: this.volumes.controls.map((group: FormGroup) => {
        return { volume: group.get('volume')?.value };
      }),
    };
    this.dialogRef.close({
      product: productData,
      index: this.productIndex,
    });
    console.log(productData.categories);
    
  }

  get characters(): FormArray<FormGroup<{ key: FormControl; value: FormControl }>> {
    return this.createForm.get('characters') as FormArray;
  }

  get volumes(): FormArray<FormGroup<{volume: FormControl<string>}>> {
    return this.createForm.get('volumes') as FormArray;
  }
}
