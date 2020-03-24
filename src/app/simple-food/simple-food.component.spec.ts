import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFoodComponent } from './simple-food.component';

describe('SimpleFoodComponent', () => {
  let component: SimpleFoodComponent;
  let fixture: ComponentFixture<SimpleFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
