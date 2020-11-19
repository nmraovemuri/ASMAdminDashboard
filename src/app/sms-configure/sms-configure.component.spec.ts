import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsConfigureComponent } from './sms-configure.component';

describe('SmsConfigureComponent', () => {
  let component: SmsConfigureComponent;
  let fixture: ComponentFixture<SmsConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsConfigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
