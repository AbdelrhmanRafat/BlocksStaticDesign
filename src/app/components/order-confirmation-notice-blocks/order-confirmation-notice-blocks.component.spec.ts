import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmationNoticeBlocksComponent } from './order-confirmation-notice-blocks.component';

describe('OrderConfirmationNoticeBlocksComponent', () => {
  let component: OrderConfirmationNoticeBlocksComponent;
  let fixture: ComponentFixture<OrderConfirmationNoticeBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderConfirmationNoticeBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderConfirmationNoticeBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
