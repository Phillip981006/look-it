import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSetCredentialsComponent } from './shop-set-credentials.component';

describe('ShopSetCredentialsComponent', () => {
  let component: ShopSetCredentialsComponent;
  let fixture: ComponentFixture<ShopSetCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSetCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSetCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
