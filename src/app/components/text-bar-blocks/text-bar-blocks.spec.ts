import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBarBlocks } from './text-bar-blocks';

describe('TextBarBlocks', () => {
  let component: TextBarBlocks;
  let fixture: ComponentFixture<TextBarBlocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBarBlocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBarBlocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
