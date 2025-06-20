import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPurchaseInfoBlocksComponent } from './modal-purchase-info-blocks.component';

describe('ModalPurchaseInfoBlocksComponent', () => {
  let component: ModalPurchaseInfoBlocksComponent;
  let fixture: ComponentFixture<ModalPurchaseInfoBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPurchaseInfoBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPurchaseInfoBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
