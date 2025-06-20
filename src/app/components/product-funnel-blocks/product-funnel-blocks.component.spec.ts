import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFunnelBlocksComponent } from './product-funnel-blocks.component';

describe('ProductFunnelBlocksComponent', () => {
  let component: ProductFunnelBlocksComponent;
  let fixture: ComponentFixture<ProductFunnelBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFunnelBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFunnelBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
