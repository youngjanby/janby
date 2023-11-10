import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface dataButtonIn {
  name: string,
  link: string,
  icon: IconProp
}

@Component({
  selector: 'my-lib-nav-tool',
  templateUrl: './nav-tool.component.html',
  styleUrls: ['./nav-tool.component.css']
})
export class NavToolComponent {
  @Input() dataButton: dataButtonIn[] = [];
}
