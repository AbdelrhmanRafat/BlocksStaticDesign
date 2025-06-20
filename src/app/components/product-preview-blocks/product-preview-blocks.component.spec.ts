import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPreviewBlocksComponent } from './product-preview-blocks.component';

describe('ProductPreviewBlocksComponent', () => {
  let component: ProductPreviewBlocksComponent;
  let fixture: ComponentFixture<ProductPreviewBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPreviewBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPreviewBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
