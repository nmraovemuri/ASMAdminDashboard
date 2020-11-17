import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSettingStripeComponent } from './payment-setting-stripe.component';

describe('PaymentSettingStripeComponent', () => {
  let component: PaymentSettingStripeComponent;
  let fixture: ComponentFixture<PaymentSettingStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSettingStripeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSettingStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
