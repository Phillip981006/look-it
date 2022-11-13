import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDevComponent } from './routing-dev.component';

describe('RoutingDevComponent', () => {
  let component: RoutingDevComponent;
  let fixture: ComponentFixture<RoutingDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
