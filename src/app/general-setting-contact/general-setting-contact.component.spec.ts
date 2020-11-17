import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingContactComponent } from './general-setting-contact.component';

describe('GeneralSettingContactComponent', () => {
  let component: GeneralSettingContactComponent;
  let fixture: ComponentFixture<GeneralSettingContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSettingContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSettingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
