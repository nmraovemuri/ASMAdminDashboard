import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUnitPriceComponent } from './product-unit-price.component';

describe('ProductUnitPriceComponent', () => {
  let component: ProductUnitPriceComponent;
  let fixture: ComponentFixture<ProductUnitPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUnitPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUnitPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
