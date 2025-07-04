import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeVisitorsBlocks } from './fake-visitors-blocks';

describe('FakeVisitorsBlocks', () => {
  let component: FakeVisitorsBlocks;
  let fixture: ComponentFixture<FakeVisitorsBlocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeVisitorsBlocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeVisitorsBlocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
