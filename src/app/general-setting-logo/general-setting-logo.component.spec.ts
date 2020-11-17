import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingLogoComponent } from './general-setting-logo.component';

describe('GeneralSettingLogoComponent', () => {
  let component: GeneralSettingLogoComponent;
  let fixture: ComponentFixture<GeneralSettingLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSettingLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSettingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
