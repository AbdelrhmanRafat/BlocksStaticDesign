import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOptions5Component } from './custom-options-5.component';

describe('CustomOptions5Component', () => {
  let component: CustomOptions5Component;
  let fixture: ComponentFixture<CustomOptions5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomOptions5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOptions5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
