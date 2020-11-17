import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingAnalyticsComponent } from './general-setting-analytics.component';

describe('GeneralSettingAnalyticsComponent', () => {
  let component: GeneralSettingAnalyticsComponent;
  let fixture: ComponentFixture<GeneralSettingAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSettingAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSettingAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
