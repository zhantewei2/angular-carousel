import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ZtwCarouselComponent } from './ztw-carousel/ztw-carousel.component';
import { CarouseItemComponent } from './carouse-item/carouse-item.component';
import { ZtwCarouselImgDirective } from './ztw-carousel-img.directive';
import { ZtwCarouselHeaderDirective } from './ztw-carousel-header.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [ZtwCarouselComponent, CarouseItemComponent, ZtwCarouselImgDirective, ZtwCarouselHeaderDirective],
  exports:[ZtwCarouselComponent,CarouseItemComponent,ZtwCarouselImgDirective,ZtwCarouselHeaderDirective]
})
export class CarouselModuleModule { }
