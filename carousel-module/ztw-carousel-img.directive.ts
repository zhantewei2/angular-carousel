import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[ztw-carousel-img]'
})
export class ZtwCarouselImgDirective {
  constructor(private el:ElementRef) { }
  ngOnInit(){
    let node =this.el.nativeElement;
    node.style.position='absolute';
    node.style.width='100%';
    node.style.height='100%';
    node.ondragstart=(e)=>{e.preventDefault()};
  }
}
