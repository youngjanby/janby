import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { faImage, faLink, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Fruit, Product, ProductData, ProductForm, dataPropsInDialog } from '../../asserts/interfaces';
import { TypeEnum } from '../../add-input/add-input.component';


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
      images: new FormArray<FormControl>([]),
      //@ts-expect-error
      price: new FormControl(this.data.product.price),
      //@ts-expect-error
      categories: new FormGroup({
        key: new FormControl(this.data.product.categories.categoryName),
        value: new FormControl(this.data.product.categories.categoryValue),
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
    if(v.volume){     
    return this.volumes.push(
      //@ts-expect-error
      new FormControl(v.volume),
    );
  }
});
  }

  add(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    if (value) {
      this.fruits.push({ name: value });
    }
    event.chipInput!.clear();
  }

  remove(fruit: Fruit) {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
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
    this.dialogRef.close(this.data);
  }
  deleteImg(index: number) {
    let currentIndex: number = index--;
    this.data.product.images.splice(currentIndex, 1);
  }

  deleteItem(data: any, index: any) {
    if (data.length === 1) return;
    let currentIndex = index--;
    data.splice(currentIndex, 1);
  }

  addCharacter() {
    this.characters.push(
      new FormGroup({
        key: new FormControl<string>('', [Validators.required]),
        value: new FormControl<string>('', [Validators.required]),
      })
    );
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
      categories: [this.data.product.categories],
      characters: [this.data.product.characters],
      tags: [...this.fruits],
      brand: {
        id: this.data.product.brand.id,
        name: getFormValue('brand'),
        icon: this.data.product.brand.icon,
      },
      images: [...this.data.product.images],
    };
    this.dialogRef.close({
      product: productData,
      index: this.productIndex,
    });
  }

  get characters(): FormArray<FormGroup<{ key: FormControl; value: FormControl }>> {
    return this.createForm.get('characters') as FormArray;
  }

  get volumes(): FormArray<FormControl<string>> {
    return this.createForm.get('volumes') as FormArray;
  }
}
