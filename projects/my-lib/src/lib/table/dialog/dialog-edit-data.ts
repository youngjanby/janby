import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
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
    constructor(
      public dialogRef: MatDialogRef<DialogWindow, Product | null>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    ngOnInit(): void {
        this.product = this.data
        console.log(this.data)
    }

    image: IconProp = faImage;
    deleteIcon: IconProp = faTrash
    product: any = []
    createForm: FormGroup = new FormGroup({
      nameFrom1C: new FormControl(this.data.nameFrom1C),
      name: new FormControl(this.data.name),
      brend: new FormControl(this.data.brand.name),
      Article: new FormControl(this.data.codeFrom1C),
      description: new FormControl(''),
      images: new FormControl(''),
      price: new FormControl(this.data.price),
      category: new FormControl(''),
      subcategory: new FormControl(''),
      volume: new FormControl(this.data.volume),
    });
    addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: any[] = [];

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

    save() {
      this.dialogRef.close(this.data)
    }
  }
