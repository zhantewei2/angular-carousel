# angular-carousel
for angular v4.0,and rely on Animations;

install:
=====
`npm install angular2-carousel-ztw --save`

import:
=====
#### app.module:
            
            
          import {CarouselModuleModule} from 'angular2-carousel-ztw/carousel-module.module';

use:
====
angular-carousel-module
    use it as follow:
    
            <ztw-carousel style='width:400px,height:300px'>
              <ztw-carousel-item *ngFor='...'>
                <img [src]='...' ztw-carousel-img>
              </ztw-carousel-item>
            </ztw-carousel>
and:
    
         <ztw-carousel style='..'>
              <ztw-carousel-item *ngFor='...'>
                <img [src]='...' ztw-carousel-img>
                <div ztw-carousel-header>
                    <h1>title</h1>
                    <div>hello picture!</div>
                </div>
              </ztw-carousel-item>
            </ztw-carousel>
            
 ***
 `ztw-carousel`
 
 
 
 Properties:
 
 
* inverse: false(default) |true

* interval: :  false(default) | :number(ms)  
>set auto play interval time
* cyclic:  true(default) | false

example:

            <ztw-carousel interval='5000'></ztw-carousel>
