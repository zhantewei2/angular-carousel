import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { ZtwCarouselComponent } from './ztw-carousel/ztw-carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { ZtwCarouselImgDirective } from './ztw-carousel-img.directive';
import { ZtwCarouselHeaderDirective } from './ztw-carousel-header.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [
    ZtwCarouselComponent,
    CarouselItemComponent,
    ZtwCarouselImgDirective,
    ZtwCarouselHeaderDirective],
  exports:[
    ZtwCarouselComponent,
    CarouselItemComponent,
    ZtwCarouselImgDirective,
    ZtwCarouselHeaderDirective]
})
export class CarouselModule{ }
