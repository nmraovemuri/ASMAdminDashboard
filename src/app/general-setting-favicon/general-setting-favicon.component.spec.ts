import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingFaviconComponent } from './general-setting-favicon.component';

describe('GeneralSettingFaviconComponent', () => {
  let component: GeneralSettingFaviconComponent;
  let fixture: ComponentFixture<GeneralSettingFaviconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSettingFaviconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSettingFaviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
