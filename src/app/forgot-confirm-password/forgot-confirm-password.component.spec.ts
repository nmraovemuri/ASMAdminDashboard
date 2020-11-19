import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotConfirmPasswordComponent } from './forgot-confirm-password.component';

describe('ForgotConfirmPasswordComponent', () => {
  let component: ForgotConfirmPasswordComponent;
  let fixture: ComponentFixture<ForgotConfirmPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotConfirmPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotConfirmPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
