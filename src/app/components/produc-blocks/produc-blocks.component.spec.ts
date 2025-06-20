import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducBlocksComponent } from './produc-blocks.component';

describe('ProducBlocksComponent', () => {
  let component: ProducBlocksComponent;
  let fixture: ComponentFixture<ProducBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
