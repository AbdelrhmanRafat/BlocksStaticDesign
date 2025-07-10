import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-options-3',
  imports: [NgFor,NgIf],
  templateUrl: './custom-options-3.component.html',
  styleUrl: './custom-options-3.component.scss'
})
export class CustomOptions3Component {
  @Input() numberOfItems: number = 1;

  selectedOptions: { [key: number]: { color?: string, size?: string } } = {};

  // Variation 3: Card-based layout with images
  customOptions = {
    color: [
      {
        value: "Crimson Red",
        hex: "#dc2626",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
        available_options: {
          size: [
            { sku_id: 301, value: "S", price: 680, price_after_discount: 580, qty: 4 },
            { sku_id: 302, value: "M", price: 680, price_after_discount: 580, qty: 8 },
            { sku_id: 303, value: "L", price: 680, price_after_discount: 580, qty: 6 }
          ]
        }
      },
      {
        value: "Midnight Black",
        hex: "#1f2937",
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=100&h=100&fit=crop",
        available_options: {
          size: [
            { sku_id: 304, value: "XS", price: 720, price_after_discount: 620, qty: 3 },
            { sku_id: 305, value: "S", price: 720, price_after_discount: 620, qty: 7 },
            { sku_id: 306, value: "M", price: 720, price_after_discount: 620, qty: 5 }
          ]
        }
      },
      {
        value: "Golden Yellow",
        hex: "#fbbf24",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&h=100&fit=crop",
        available_options: {
          size: [
            { sku_id: 307, value: "M", price: 650, price_after_discount: 550, qty: 6 },
            { sku_id: 308, value: "L", price: 650, price_after_discount: 550, qty: 4 },
            { sku_id: 309, value: "XL", price: 650, price_after_discount: 550, qty: 2 }
          ]
        }
      }
    ],
    size: [
      { 
        value: "XS", 
        description: "حجم صغير جداً",
        available_colors: ["Midnight Black"] 
      },
      { 
        value: "S", 
        description: "حجم صغير", 
        available_colors: ["Crimson Red", "Midnight Black"] 
      },
      { 
        value: "M", 
        description: "حجم متوسط", 
        available_colors: ["Crimson Red", "Midnight Black", "Golden Yellow"] 
      },
      { 
        value: "L", 
        description: "حجم كبير", 
        available_colors: ["Crimson Red", "Golden Yellow"] 
      },
      { 
        value: "XL", 
        description: "حجم كبير جداً", 
        available_colors: ["Golden Yellow"] 
      }
    ]
  };

  getItemNumbers(): number[] {
    return Array.from({ length: this.numberOfItems }, (_, i) => i + 1);
  }

  onColorSelect(itemIndex: number, color: string) {
    if (!this.selectedOptions[itemIndex]) {
      this.selectedOptions[itemIndex] = {};
    }
    this.selectedOptions[itemIndex].color = color;
  }

  onSizeSelect(itemIndex: number, size: string) {
    if (!this.selectedOptions[itemIndex]) {
      this.selectedOptions[itemIndex] = {};
    }
    this.selectedOptions[itemIndex].size = size;
  }

  isColorSelected(itemIndex: number, color: string): boolean {
    return this.selectedOptions[itemIndex]?.color === color;
  }

  isSizeSelected(itemIndex: number, size: string): boolean {
    return this.selectedOptions[itemIndex]?.size === size;
  }

  getSelectedColorData(itemIndex: number) {
    const selectedColor = this.selectedOptions[itemIndex]?.color;
    return this.customOptions.color.find(c => c.value === selectedColor);
  }

  getTranslation(key: string): string {
    const translations: { [key: string]: string } = {
      'dynamicPanel.selectOptionsForProduct': 'اختر خيارات المنتج - النموذج الثالث'
    };
    return translations[key] || key;
  }

  getColorHex(itemIndex: number): string | undefined {
    const colorValue = this.selectedOptions[itemIndex]?.color;
    return this.customOptions.color.find(c => c.value === colorValue)?.hex;
  }
}