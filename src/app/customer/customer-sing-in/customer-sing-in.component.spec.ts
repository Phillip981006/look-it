import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSingInComponent } from './customer-sing-in.component';

describe('CustomerSingInComponent', () => {
  let component: CustomerSingInComponent;
  let fixture: ComponentFixture<CustomerSingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSingInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
