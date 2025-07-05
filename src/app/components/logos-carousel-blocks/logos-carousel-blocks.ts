import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-logos-carousel-blocks',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './logos-carousel-blocks.html',
  styleUrls: ['./logos-carousel-blocks.scss']
})
export class LogosCarouselBlocks {
  
  // Partner logos data
  partners = [
    {
      name: 'Apple',
      logo: 'https://logo.clearbit.com/apple.com',
      alt: 'Apple Logo'
    },
    {
      name: 'Microsoft',
      logo: 'https://logo.clearbit.com/microsoft.com',
      alt: 'Microsoft Logo'
    },
    {
      name: 'Google',
      logo: 'https://logo.clearbit.com/google.com',
      alt: 'Google Logo'
    },
    {
      name: 'Amazon',
      logo: 'https://logo.clearbit.com/amazon.com',
      alt: 'Amazon Logo'
    },
    {
      name: 'Meta',
      logo: 'https://logo.clearbit.com/facebook.com',
      alt: 'Meta Logo'
    },
    {
      name: 'Netflix',
      logo: 'https://logo.clearbit.com/netflix.com',
      alt: 'Netflix Logo'
    },
    {
      name: 'Tesla',
      logo: 'https://logo.clearbit.com/tesla.com',
      alt: 'Tesla Logo'
    },
    {
      name: 'Adobe',
      logo: 'https://logo.clearbit.com/adobe.com',
      alt: 'Adobe Logo'
    }
  ];

  // Owl Carousel options
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    rtl: true, // Right-to-left support
    navText: ['', ''], // Empty navigation text
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false // Navigation arrows disabled
  };

  // Method to handle image loading errors
  onImageError(event: any): void {
    event.target.src = 'assets/images/placeholder-logo.png';
    console.warn('Logo failed to load:', event.target.alt);
  }

  // Method to handle successful image loading
  onImageLoad(event: any): void {
    event.target.classList.add('loaded');
  }
}