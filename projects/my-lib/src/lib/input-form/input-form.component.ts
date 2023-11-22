import { Component, Injectable, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Injectable()
@Component({
  selector: 'my-lib-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  @Input() control!: FormControl<string>
  @Input() placeholder: string = ''
  @Input() header: string = ''
  @Input() isArea: boolean = false
}
