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
    { path: '/product-features', label: 'Product Information' },
    { path: '/product-preview-blocks', label: 'Product Demo' },
    { path: '/product-usage-blocks', label: 'Watch How to Use' },
    { path: '/logos-carousel-blocks', label: 'Our Partners' },
    { path: '/today-statistics-blocks', label: 'Today Statistics' },
    { path: '/grid-images-gallery-blocks', label: 'Photo Gallery' },
    { path: '/befor-after-blocks', label: 'Before & After' },
    { path: '/reviews-blocks', label: 'Reviews' },
    { path: '/image-text-blocks', label: 'Product Information' },
    { path: '/image-text-2-blocks', label: 'Product Information 2' },
    { path: '/faq', label: 'FAQ' },
    { path: '/product-features', label: 'Delivery Information' },
    { path: '/count-down-blocks', label: 'Countdown' },
    { path: '/footer-blocks', label: 'Footer' },
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