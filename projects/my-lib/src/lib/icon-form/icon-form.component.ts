import { Component, Injectable, Input } from '@angular/core';
import { faImage, faLink, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';



@Injectable()
@Component({
  selector: 'my-lib-icon-form',
  templateUrl: './icon-form.component.html',
  styleUrl: './icon-form.component.css'
})
export class IconFormComponent {
  image: IconProp = faImage
  deleteIcon: IconProp = faTrash
  linkAccess: IconProp = faLink
  

  @Input() data: any
  @Input() dataForm: any

  deleteItem(data: any ,index: any) {
    if(data.length === 1) return
      let currentIndex = index--
      data.splice(currentIndex, 1)
  }

  addImage() {
    const value = this.dataForm.value
    if(value) {
      this.data.product.images.push({name: this.dataForm.value})
    }
  }
}
