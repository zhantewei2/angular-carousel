import { Component,ContentChildren,Input,forwardRef} from '@angular/core';
import {CarouselItemComponent} from '../carousel-item/carousel-item.component';
import {Parent} from '../class';
@Component({
  selector: 'ztw-carousel',
  templateUrl: './ztw-carousel.component.html',
  styleUrls: ['./ztw-carousel.component.css'],
  providers:[{provide:Parent,useExisting:forwardRef(()=>ZtwCarouselComponent)}]
})
export class ZtwCarouselComponent{
  @ContentChildren(CarouselItemComponent)items;
  @Input('reverse')reverse:any;
  @Input('interval')interval:any;
  @Input('cyclic')cyclic:boolean;
  intervalFn:any;
  imgArr:Array<any>;
  index:number=0;
  lastIndex:number;
  distinct:any;
  navBar:any={
    pagePre:undefined,
    pageSize:5,
    page:0,
    pages:undefined,
    arr:[]
  };
  constructor(){};
  firstset:boolean=false;
  ngAfterContentInit(){
    this.cyclic=this.cyclic===undefined?true:this.cyclic;
    this.imgArr=this.items['_results'];
    this.lastIndex=this.imgArr.length-1;
    this.navBar.pages=Math.floor(this.lastIndex/this.navBar.pageSize);
    this.setNavBar();
    this.interval?setInterval(()=>{this.reverse?this.pre():this.next()},this.interval):0;
  }
  pre(){
    this.gotoImg(this.getAfterNode(true),'rightHide','leftMain');
  }
  next(){
    this.gotoImg(this.getAfterNode(false),'leftHide','rightMain');
  };
  selectImg(i){
    if(i===this.index)return;
    if(i>this.index){
      this.gotoImg(i,'leftHide','rightMain');
    }else{
      this.gotoImg(i,'rightHide','leftMain');
    }
  }
  getAfterNode(pre){
    if(pre){
      if(this.index<=0){
         return!this.cyclic?null:this.lastIndex;
      }
      return this.index-1;
    }else{
      if(this.index>=this.lastIndex){
        return!this.cyclic?null:0;
      }
      return this.index+1;
    }
  }
  gotoImg(afterIndex,nowState,afterState){
    if(!!this.distinct)return;
    if(afterIndex===null)return;
    this.imgArr[this.index].slide=nowState;
    this.imgArr[afterIndex].slide=afterState;
    this.index=afterIndex;
    this.setNavBar();
    this.distinct=setTimeout(()=>{this.distinct=undefined;},500);
  }
  setNavBar(){
    this.navBar.page=Math.floor(this.index/this.navBar.pageSize);
    if(this.navBar.page===this.navBar.pagePre)return;
    this.navBar.pagePre=this.navBar.page;
    this.navBar.arr=[];
    let beginOffset=this.navBar.page*this.navBar.pageSize;
    if(this.navBar.page==this.navBar.pages){
      for(let i=beginOffset;i<=this.lastIndex;i++){
        this.navBar.arr.push(i);
      }
    }else{
      for(let i=beginOffset;i<=i+this.navBar.pageSize;i++){
        this.navBar.arr.push(i);
      }
    }
  }

}
