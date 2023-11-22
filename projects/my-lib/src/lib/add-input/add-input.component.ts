import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TYPE } from '../asserts/enum';

export enum TypeEnum {
  List,
  Pairs,
}

@Injectable()
@Component({
  selector: 'my-lib-add-input',
  templateUrl: './add-input.component.html',
  styleUrl: './add-input.component.css',
})
export class AddInputComponent  {
  @Input() type!: number | string
  @Input() added: string = '';
  @Input() property: any;
  @Input() header: string = ''
  @Input() control!: 
      FormArray<FormControl<string>>
    | FormArray<FormGroup<{ key: FormControl<string>; value: FormControl<string> }>>;

  TypeEnum = TypeEnum

  deleteIcon: IconProp = faTrash;

  deleteItem(data: any, index: any) {
    if (data.length === 1) return;
    let currentIndex = index--;
    data.splice(currentIndex, 1);
  }

  addItem(type: string | number) {
    if(type === TypeEnum.Pairs) {
      this.property.push(
          new FormControl('')
      ) 
    } else {
      this.property.push(
        new FormGroup({
          key: new FormControl<string>(''),
          value: new FormControl<string>(''),
        }))
    }
  }
}
