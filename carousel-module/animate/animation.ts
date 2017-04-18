import {trigger,style,transition,animate,state} from '@angular/animations';
let defaultT='0.4s ease-in-out';
export function carouselSlide(t=defaultT){
  return trigger('slide',[
    state('await',style({display:'none'})),
    state('leftHide',style({display:'none'})),
    state('rightHide',style({display:'none'})),
    state('main',style({display:'block'})),
    transition('*=>leftMain',[style({transform:'translateX(-100%)'}),animate(t)]),
    transition('*=>rightMain',[style({transform:'translateX(100%)'}),animate(t)]),
    transition('*=>rightHide',[animate(t,style({transform:'translateX(100%)'}))]),
    transition('*=>leftHide',[animate(t,style({transform:'translateX(-100%)'}))])
  ]);
}
export function slide(name,pos,t='0.3s ease-out'){
  return trigger(name,[
    state('hidden',style({visibility:'hidden'})),
    state('show',style({visibility:'visible'})),
    transition('hidden=>show',[style({transform:'translateX('+pos+')'}),animate(t)]),
    transition('show=>hidden',[animate(t,style({transform:'translateX('+pos+')'}))])
  ])
}
