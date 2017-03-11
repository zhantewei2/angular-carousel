import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseItemComponent } from './carouse-item.component';

describe('CarouseItemComponent', () => {
  let component: CarouseItemComponent;
  let fixture: ComponentFixture<CarouseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
