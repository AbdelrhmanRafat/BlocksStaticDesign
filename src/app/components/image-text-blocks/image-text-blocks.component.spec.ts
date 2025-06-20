import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextBlocksComponent } from './image-text-blocks.component';

describe('ImageTextBlocksComponent', () => {
  let component: ImageTextBlocksComponent;
  let fixture: ComponentFixture<ImageTextBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTextBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
