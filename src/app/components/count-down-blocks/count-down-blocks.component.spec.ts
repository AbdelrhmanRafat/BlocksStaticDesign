import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownBlocksComponent } from './count-down-blocks.component';

describe('CountDownBlocksComponent', () => {
  let component: CountDownBlocksComponent;
  let fixture: ComponentFixture<CountDownBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountDownBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDownBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
