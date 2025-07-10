import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CustomOptionsComponent } from '../custom-options/custom-options.component';
import { CustomOptions2Component } from '../custom-options-2/custom-options-2.component';
import { CustomOptions3Component } from '../custom-options-3/custom-options-3.component';
import { CustomOptions4Component } from '../custom-options-4/custom-options-4.component';

@Component({
  selector: 'app-product-funnel-blocks',
  imports: [
    NgFor, NgIf, CustomOptionsComponent, CustomOptions2Component, CustomOptions3Component, CustomOptions4Component
  ,NgClass],
  templateUrl: './product-funnel-blocks.component.html',
  styleUrl: './product-funnel-blocks.component.scss'
})
export class ProductFunnelBlocksComponent {
  // Track selection for each variation separately
  selectedBundleIndex: { [key: number]: number } = {
    1: 0, // Variation 1
    2: 0, // Variation 2  
    3: 0, // Variation 3
    4: 0  // Variation 4
  };

  showCustomOptions: { [key: number]: boolean } = {
    1: false,
    2: false,
    3: false,
    4: false
  };

  purchaseOptions = [
    {
      title: "شراء منتج واحد",
      items: 1,
      price_per_item: 2290,
      original_price_per_item: 2290,
      original_total: 2290,
      total_price: 2290,
      discount: 0,
      discount_percent: "0%",
      shipping_price: 50,
      final_total: 2340
    },
    {
      title: "اشترِ قطعتين ووفر",
      items: 2,
      price_per_item: 1785,
      original_price_per_item: 2290,
      original_total: 4580,
      total_price: 3570,
      discount: 1010,
      discount_percent: "22%",
      shipping_price: 70,
      final_total: 3640
    },
    {
      title: "اشترِ ثلاثة ووفر",
      items: 3,
      price_per_item: 1499,
      original_price_per_item: 2290,
      original_total: 6870,
      total_price: 4497,
      discount: 2373,
      discount_percent: "35%",
      shipping_price: 90,
      final_total: 4587
    }
  ];

  onBundleSelect(variationId: number, index: number) {
    this.selectedBundleIndex[variationId] = index;
    this.showCustomOptions[variationId] = true;
  }

  getTranslation(key: string): string {
    const translations: { [key: string]: string } = {
      'quantityOptions.chooseQuantity': 'اختر الكمية',
      'quantityOptions.itemUnit.singular': 'قطعة',
      'quantityOptions.pricePerItem': 'للقطعة الواحدة',
      'productFunnel.currency': 'ج.م',
      'quantityOptions.saveDiscount': 'وفر {discountAmount} ({discountPercent})'
    };
    return translations[key] || key;
  }

  formatDiscount(discount: number, discountPercent: string): string {
    return this.getTranslation('quantityOptions.saveDiscount')
      .replace('{discountAmount}', discount.toLocaleString() + ' ' + this.getTranslation('productFunnel.currency'))
      .replace('{discountPercent}', discountPercent);
  }
}