import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUsageBlocksComponent } from './product-usage-blocks.component';

describe('ProductUsageBlocksComponent', () => {
  let component: ProductUsageBlocksComponent;
  let fixture: ComponentFixture<ProductUsageBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductUsageBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUsageBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
