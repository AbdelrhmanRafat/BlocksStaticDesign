import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesBlocksComponent } from './rates-blocks.component';

describe('RatesBlocksComponent', () => {
  let component: RatesBlocksComponent;
  let fixture: ComponentFixture<RatesBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatesBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatesBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
