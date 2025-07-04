import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosCarouselBlocks } from './logos-carousel-blocks';

describe('LogosCarouselBlocks', () => {
  let component: LogosCarouselBlocks;
  let fixture: ComponentFixture<LogosCarouselBlocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosCarouselBlocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosCarouselBlocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
