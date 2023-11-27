import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { faImage, faLink, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FormControl, Validators } from '@angular/forms';



@Injectable()
@Component({
  selector: 'my-lib-icon-form',
  templateUrl: './icon-form.component.html',
  styleUrl: './icon-form.component.scss'
})
export class IconFormComponent {
  image: IconProp = faImage
  deleteIcon: IconProp = faTrash
  linkAccess: IconProp = faLink
  link = new FormControl('', [Validators.required])


  @Input() data: any
  @Output() imageChanges = new EventEmitter()

  deleteItem(data: any ,index: any) {
    if(data.length === 1) return
      let currentIndex = index--
      data.splice(currentIndex, 1)

  }

  addImage() {
    this.data.product.images.push({name: this.link.value})
    this.imageChanges.emit(this.data.product.images)
  }

  get Images() {
    return this.data.product.images
  }
}
