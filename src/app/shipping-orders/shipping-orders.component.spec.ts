import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOrdersComponent } from './shipping-orders.component';

describe('ShippingOrdersComponent', () => {
  let component: ShippingOrdersComponent;
  let fixture: ComponentFixture<ShippingOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
