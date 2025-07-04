import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponBlocks } from './coupon-blocks';

describe('CouponBlocks', () => {
  let component: CouponBlocks;
  let fixture: ComponentFixture<CouponBlocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponBlocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponBlocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
