import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayStatisticsBlocks } from './today-statistics-blocks';

describe('TodayStatisticsBlocks', () => {
  let component: TodayStatisticsBlocks;
  let fixture: ComponentFixture<TodayStatisticsBlocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayStatisticsBlocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayStatisticsBlocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
