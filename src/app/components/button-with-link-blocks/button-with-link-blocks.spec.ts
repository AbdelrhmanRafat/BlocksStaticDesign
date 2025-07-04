import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithLinkBlocks } from './button-with-link-blocks';

describe('ButtonWithLinkBlocks', () => {
  let component: ButtonWithLinkBlocks;
  let fixture: ComponentFixture<ButtonWithLinkBlocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithLinkBlocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithLinkBlocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
