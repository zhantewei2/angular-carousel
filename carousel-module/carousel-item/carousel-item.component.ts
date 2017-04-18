import { Component,HostBinding } from '@angular/core';
import {carouselSlide} from '../animate/animation';
@Component({
  selector: 'ztw-carousel-item',
  template: `
    <ng-content></ng-content>
  `,
  styles:[
    ':host{position:absolute;width:100%;height:100%;}'
  ],
  animations:[carouselSlide()]
})
export class CarouselItemComponent {
  @HostBinding('@slide')slide;
  constructor() {}
}
