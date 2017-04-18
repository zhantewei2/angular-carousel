import { Component,ContentChildren,Input,ViewChild} from '@angular/core';
import {CarouselItemComponent} from '../carousel-item/carousel-item.component';
import {slide} from '../animate/animation';
@Component({
  selector: 'ztw-carousel',
  templateUrl: './ztw-carousel.component.html',
  styleUrls: ['./ztw-carousel.component.css'],
  animations:[slide('SlideLeft','-80%'),slide('SlideRight','80%')]
})
export class ZtwCarouselComponent{
  @ContentChildren(CarouselItemComponent)items;
  @Input('inverse')inverse:any;
  @Input('interval')interval:any;
  @Input('cyclic')cyclic:boolean;
  @ViewChild('main')main;
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
  showBtn:string='hidden';
  constructor(){};
  ngAfterContentInit(){
    let mainNode=this.main.nativeElement,
      moveDirection,
      mouseDown,
      preX:any=null,
      clearAndSend=(endX)=>{
        mouseDown=null;
        if(!preX)return;
        this.gesture(preX-endX);
        moveDirection=null;
        preX=null;
      };
    mainNode.onmousedown=(e)=>{
      preX=e.clientX;
    };
    this.main.nativeElement.onmouseup=(e)=>{
      clearAndSend(e.clientX);
    };
    this.leaveMain=(e)=>{
      if(preX===null)return;
      clearAndSend(e.clientX);
    };

    this.cyclic=this.cyclic===undefined?true:this.cyclic;
    ((callback)=>{
      let imgArr=this.items['_results'];
      if(imgArr.length)return callback(imgArr);
      let sub=this.items.changes.subscribe(v=>{
       callback(this.items['_results']);
       sub.unsubscribe();
      })
    })((imgArr)=>{
      this.imgArr=imgArr;
      this.imgArr=this.items['_results'];
      setTimeout(()=>{
        imgArr.forEach((v,index)=>{
          v.slide=index==0?'main':'await';
        });
      },1);
      this.lastIndex=this.imgArr.length-1;
      this.navBar.pages=Math.floor(this.lastIndex/this.navBar.pageSize);
      this.setNavBar();
      this.interval?setInterval(()=>{this.inverse?this.pre():this.next()},this.interval):0;
    })
  }
  gesture(len){
    if(len>50)this.next();
    if(len<-50)this.pre();
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
  leaveMain(e){}
}
