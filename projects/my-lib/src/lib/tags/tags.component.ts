import { Component, Injectable, Input, inject } from '@angular/core';
import { Fruit } from '../asserts/interfaces';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

@Injectable()
@Component({
  selector: 'my-lib-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export default class TagsComponent {
  @Input() fruits: Fruit[] = []

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  announcer = inject(LiveAnnouncer);


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
}
