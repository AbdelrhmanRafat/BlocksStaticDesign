import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldBlocksComponent } from './form-field-blocks.component';

describe('FormFieldBlocksComponent', () => {
  let component: FormFieldBlocksComponent;
  let fixture: ComponentFixture<FormFieldBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
