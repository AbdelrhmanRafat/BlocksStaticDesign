import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-images-gallery-blocks',
  imports: [],
  templateUrl: './grid-images-gallery-blocks.html',
  styleUrls : ['./grid-images-gallery-blocks.scss']
})
export class GridImagesGalleryBlocks {
  
  // Gallery data structure
  galleryData = {
    "name": "classic_Gallery",
    "data": {
      "title_ar": "معرض الصور",
      "title_en": "Photo Gallery",
      "icon": "fa-solid fa-images",
      "description": "",
      "items": [
        {
          "label": "صورة المنتج الرئيسية",
          "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop"
        },
        {
          "label": "صورة المنتج 2",
          "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop"
        },
        {
          "label": "صورة المنتج 3",
          "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop"
        },
        {
          "label": "صورة المنتج 4",
          "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=400&fit=crop"
        },
        {
          "label": "صورة المنتج 5",
          "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=400&fit=crop"
        },
        {
          "label": "صورة المنتج 6",
          "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=400&fit=crop"
        },
        {
          "label": "صورة المنتج 7",
          "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=400&fit=crop"
        },
        {
          "label": "صورة المنتج 8",
          "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=400&fit=crop"
        }
      ],
      "buttonLabel": "عرض المزيد"
    }
  };

  // Language preference (you can make this dynamic)
  isArabic = true;

  // Method to handle image loading errors
  onImageError(event: any): void {
    event.target.src = 'assets/images/placeholder-image.png';
    console.warn('Gallery image failed to load:', event.target.alt);
  }

  // Method to handle image click events
  onImageClick(item: any, index: number): void {
    console.log('Image clicked:', item.label, 'at index:', index);
    // You can implement lightbox or modal functionality here
  }

  // TrackBy function for performance optimization
  trackByImage(index: number, item: any): string {
    return item.image + index;
  }
}