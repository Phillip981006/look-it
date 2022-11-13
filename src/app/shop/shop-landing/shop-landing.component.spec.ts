import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLandingComponent } from './shop-landing.component';

describe('ShopLandingComponent', () => {
  let component: ShopLandingComponent;
  let fixture: ComponentFixture<ShopLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
