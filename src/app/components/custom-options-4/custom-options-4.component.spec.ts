import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOptions4Component } from './custom-options-4.component';

describe('CustomOptions4Component', () => {
  let component: CustomOptions4Component;
  let fixture: ComponentFixture<CustomOptions4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomOptions4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOptions4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
