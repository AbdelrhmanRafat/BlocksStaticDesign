import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayOrdersBlocksComponent } from './today-orders-blocks.component';

describe('TodayOrdersBlocksComponent', () => {
  let component: TodayOrdersBlocksComponent;
  let fixture: ComponentFixture<TodayOrdersBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayOrdersBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayOrdersBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
