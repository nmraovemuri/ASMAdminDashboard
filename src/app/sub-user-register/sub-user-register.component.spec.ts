import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUserRegisterComponent } from './sub-user-register.component';

describe('SubUserRegisterComponent', () => {
  let component: SubUserRegisterComponent;
  let fixture: ComponentFixture<SubUserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubUserRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubUserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
