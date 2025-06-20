import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsBlocksComponent } from './reviews-blocks.component';

describe('ReviewsBlocksComponent', () => {
  let component: ReviewsBlocksComponent;
  let fixture: ComponentFixture<ReviewsBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
