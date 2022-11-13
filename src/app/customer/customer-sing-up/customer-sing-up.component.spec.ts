import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSingUpComponent } from './customer-sing-up.component';

describe('CustomerSingUpComponent', () => {
  let component: CustomerSingUpComponent;
  let fixture: ComponentFixture<CustomerSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSingUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
