# angular-carousel
angular-carousel-module
    use it as follow:
    
            <ztw-carousel>
              <ztw-carouse-item *ngFor='...'>
                <img [src]='...' ztw-carousel-img>
              </ztw-carouse-item>
            </ztw-carousel>
and:
    
         <ztw-carousel>
              <ztw-carouse-item *ngFor='...'>
                <img [src]='...' ztw-carousel-img>
                <div ztw-carousel-header>
                    <h1>title</h1>
                    <div>hello picture!</div>
                </div>
              </ztw-carouse-item>
            </ztw-carousel>
            
 ***
 `ztw-carousel`
 
 
 attribution:
 
 
* reverse: false(default) |true

* interval: :  false(default) | :number(ms)

* cyclic:  true(default) | false
