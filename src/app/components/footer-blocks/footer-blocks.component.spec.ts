import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBlocksComponent } from './footer-blocks.component';

describe('FooterBlocksComponent', () => {
  let component: FooterBlocksComponent;
  let fixture: ComponentFixture<FooterBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
