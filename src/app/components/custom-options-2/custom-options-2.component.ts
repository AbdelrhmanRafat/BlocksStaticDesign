import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-options-2',
  imports: [NgIf,NgFor],
  templateUrl: './custom-options-2.component.html',
  styleUrl: './custom-options-2.component.scss'
})
export class CustomOptions2Component {
  @Input() numberOfItems: number = 1;

  selectedOptions: { [key: number]: { color?: string, size?: string } } = {};

  // Variation 2: Different product data with more colors and sizes
  customOptions = {
    color: [
      {
        value: "Ocean Blue",
        hex: "#1e40af",
        available_options: {
          size: [
            { sku_id: 201, value: "S", price: 450, price_after_discount: 380, qty: 8 },
            { sku_id: 202, value: "M", price: 450, price_after_discount: 380, qty: 12 },
            { sku_id: 203, value: "L", price: 450, price_after_discount: 380, qty: 6 }
          ]
        }
      },
      {
        value: "Sunset Orange",
        hex: "#f59e0b",
        available_options: {
          size: [
            { sku_id: 204, value: "XS", price: 480, price_after_discount: 400, qty: 4 },
            { sku_id: 205, value: "S", price: 480, price_after_discount: 400, qty: 7 },
            { sku_id: 206, value: "M", price: 480, price_after_discount: 400, qty: 9 }
          ]
        }
      },
      {
        value: "Forest Green",
        hex: "#059669",
        available_options: {
          size: [
            { sku_id: 207, value: "M", price: 520, price_after_discount: 450, qty: 5 },
            { sku_id: 208, value: "L", price: 520, price_after_discount: 450, qty: 8 },
            { sku_id: 209, value: "XL", price: 520, price_after_discount: 450, qty: 3 }
          ]
        }
      },
      {
        value: "Royal Purple",
        hex: "#7c3aed",
        available_options: {
          size: [
            { sku_id: 210, value: "XS", price: 600, price_after_discount: 500, qty: 2 },
            { sku_id: 211, value: "S", price: 600, price_after_discount: 500, qty: 6 }
          ]
        }
      }
    ],
    size: [
      { value: "XS", available_colors: ["Sunset Orange", "Royal Purple"] },
      { value: "S", available_colors: ["Ocean Blue", "Sunset Orange", "Royal Purple"] },
      { value: "M", available_colors: ["Ocean Blue", "Sunset Orange", "Forest Green"] },
      { value: "L", available_colors: ["Ocean Blue", "Forest Green"] },
      { value: "XL", available_colors: ["Forest Green"] }
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

  getTranslation(key: string): string {
    const translations: { [key: string]: string } = {
      'dynamicPanel.selectOptionsForProduct': 'اختر خيارات المنتج - النموذج الثاني'
    };
    return translations[key] || key;
  }

  getColorHex(itemIndex: number): string | undefined {
    const colorValue = this.selectedOptions[itemIndex]?.color;
    return this.customOptions.color.find(c => c.value === colorValue)?.hex;
  }
}