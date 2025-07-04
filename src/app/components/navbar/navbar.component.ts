import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  screenIsMobile = false;

  navigationItems = [
    { path: '/home', label: 'Home' },
    { path: '/product-features', label: 'Product Features' },
    { path: '/faq', label: 'FAQ' },
    { path: '/befor-after-blocks', label: 'Before/After' },
    { path: '/count-down-blocks', label: 'Countdown' },
    { path: '/footer-blocks', label: 'Footer Preview' },
    { path: '/form-field-blocks', label: 'Form Fields' },
    { path: '/image-text-blocks', label: 'Image & Text' },
    { path: '/modal-purchase-info-blocks', label: 'Purchase Modal' },
    { path: '/order-confirmation-notice-blocks', label: 'Order Confirmation' },
    { path: '/produc-blocks', label: 'Product Showcase' },
    { path: '/product-funnel-blocks', label: 'Product Funnel' },
    { path: '/product-preview-blocks', label: 'Product Preview' },
    { path: '/product-usage-blocks', label: 'Product Usage' },
    { path: '/rates-blocks', label: 'Rates Display' },
    { path: '/reviews-blocks', label: 'Reviews' },
    { path: '/today-orders-blocks', label: 'Today\'s Orders' },
    { path: '/button-with-link-blocks', label: 'Button With Link' },
    { path: '/coupon-blocks', label: 'Coupon' },
    { path: '/fake-visitors-blocks', label: 'Fake Visitors' },
    { path: '/grid-images-gallery-blocks', label: 'Grid Images Gallery' },
    { path: '/logos-carousel-blocks', label: 'Logos Carousel' },
    { path: '/today-statistics-blocks', label: 'Today Statistics' },
    { path: '/text-bar-blocks', label: 'Text Bar' }
  ];

  ngOnInit() {
  this.checkScreen();
  window.addEventListener('resize', () => this.checkScreen());
}

checkScreen() {
  this.screenIsMobile = window.innerWidth < 768; // Tailwind md breakpoint
  if (!this.screenIsMobile) this.isMenuOpen = true; // always open on desktop
}

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
}