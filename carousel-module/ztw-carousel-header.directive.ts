import { Directive,HostBinding} from '@angular/core';

@Directive({
  selector: '[ztw-carousel-header]'
})
export class ZtwCarouselHeaderDirective {
  @HostBinding('class')calssName='carouselHeader';
  constructor(){}
}
