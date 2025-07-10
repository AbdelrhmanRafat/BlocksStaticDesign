import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews-blocks',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './reviews-blocks.component.html',
  styleUrls: ['./reviews-blocks.component.scss']
})
export class ReviewsBlocksComponent {
  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    nav: false,
    dots: true,
    rtl: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      900: { items: 3 }
    }
  };
}