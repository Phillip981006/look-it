import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetCredentialsComponent } from './customer-set-credentials.component';

describe('CustomerSetCredentialsComponent', () => {
  let component: CustomerSetCredentialsComponent;
  let fixture: ComponentFixture<CustomerSetCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSetCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSetCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
