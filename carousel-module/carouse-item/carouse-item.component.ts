import { Component, OnInit, trigger,transition,style,animate,state,HostBinding } from '@angular/core';
import {Parent} from '../class';
let t='0.5s ease-out';
@Component({
  selector: 'ztw-carouse-item',
  template: `    
    <ng-content></ng-content>
  `,
  styles:[
    ':host{position:absolute;width:100%;height:100%;}'
  ],
  animations:[
    trigger('slide',[
      state('await',style({display:'none'})),
      state('leftHide',style({display:'none'})),
      state('rightHide',style({display:'none'})),
      state('main',style({display:'block'})),
      transition('*=>leftMain',[style({transform:'translateX(-100%)'}),animate(t)]),
      transition('*=>rightMain',[style({transform:'translateX(100%)'}),animate(t)]),
      transition('*=>rightHide',[animate(t,style({transform:'translateX(100%)'}))]),
      transition('*=>leftHide',[animate(t,style({transform:'translateX(-100%)'}))])
    ])
  ]
})
export class CarouseItemComponent implements OnInit {
  slideValue:any;
  @HostBinding('@slide')slide;
  constructor(private parent:Parent) {
    console.log(11)
    if(!this.parent.firsetset){
      this.slide='main';
      this.parent.firsetset=true;
    }else{
      this.slide='await';
    }
  }

  ngOnInit() {

  }

}
