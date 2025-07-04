import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImagesGalleryBlocks } from './grid-images-gallery-blocks';

describe('GridImagesGalleryBlocks', () => {
  let component: GridImagesGalleryBlocks;
  let fixture: ComponentFixture<GridImagesGalleryBlocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridImagesGalleryBlocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridImagesGalleryBlocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
