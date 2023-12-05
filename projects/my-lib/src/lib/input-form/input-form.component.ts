import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Injectable()
@Component({
  selector: 'my-lib-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent implements OnInit {
  @Input() control!: FormControl<string>
  @Input() placeholder: string = ''
  @Input() header: string = ''
  @Input() isArea: boolean = false
  @Input() isSmallInput: boolean = false
  
  inputClass: boolean = false

  ngOnInit(): void {
    this.inputClass = this.isSmallInput
  }
}
