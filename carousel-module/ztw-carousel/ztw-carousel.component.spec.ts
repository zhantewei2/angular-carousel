import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtwCarouselComponent } from './ztw-carousel.component';

describe('ZtwCarouselComponent', () => {
  let component: ZtwCarouselComponent;
  let fixture: ComponentFixture<ZtwCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtwCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtwCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
