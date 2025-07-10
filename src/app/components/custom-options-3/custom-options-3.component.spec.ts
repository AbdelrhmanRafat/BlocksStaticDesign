import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOptions3Component } from './custom-options-3.component';

describe('CustomOptions3Component', () => {
  let component: CustomOptions3Component;
  let fixture: ComponentFixture<CustomOptions3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomOptions3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOptions3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
