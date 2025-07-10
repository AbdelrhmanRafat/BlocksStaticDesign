import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-options-4',
  imports: [NgFor,NgIf],
  templateUrl: './custom-options-4.component.html',
  styleUrl: './custom-options-4.component.scss'
})
export class CustomOptions4Component {
  @Input() numberOfItems: number = 1;

  selectedOptions: { [key: number]: { color?: string, size?: string } } = {};

  // Variation 4: Minimal modern layout with step-by-step selection
  customOptions = {
    color: [
      {
        value: "Pure White",
        hex: "#ffffff",
        border: "#e5e7eb",
        available_options: {
          size: [
            { sku_id: 401, value: "XS", price: 380, price_after_discount: 320, qty: 10 },
            { sku_id: 402, value: "S", price: 380, price_after_discount: 320, qty: 15 },
            { sku_id: 403, value: "M", price: 380, price_after_discount: 320, qty: 12 },
            { sku_id: 404, value: "L", price: 380, price_after_discount: 320, qty: 8 }
          ]
        }
      },
      {
        value: "Space Gray",
        hex: "#6b7280",
        border: "#4b5563",
        available_options: {
          size: [
            { sku_id: 405, value: "S", price: 420, price_after_discount: 360, qty: 6 },
            { sku_id: 406, value: "M", price: 420, price_after_discount: 360, qty: 9 },
            { sku_id: 407, value: "L", price: 420, price_after_discount: 360, qty: 7 },
            { sku_id: 408, value: "XL", price: 420, price_after_discount: 360, qty: 4 }
          ]
        }
      },
      {
        value: "Rose Gold",
        hex: "#f3a683",
        border: "#e17055",
        available_options: {
          size: [
            { sku_id: 409, value: "XS", price: 480, price_after_discount: 420, qty: 3 },
            { sku_id: 410, value: "S", price: 480, price_after_discount: 420, qty: 5 },
            { sku_id: 411, value: "M", price: 480, price_after_discount: 420, qty: 4 }
          ]
        }
      },
      {
        value: "Deep Blue",
        hex: "#3b82f6",
        border: "#2563eb",
        available_options: {
          size: [
            { sku_id: 412, value: "M", price: 450, price_after_discount: 390, qty: 6 },
            { sku_id: 413, value: "L", price: 450, price_after_discount: 390, qty: 8 },
            { sku_id: 414, value: "XL", price: 450, price_after_discount: 390, qty: 5 }
          ]
        }
      }
    ],
    size: [
      { 
        value: "XS", 
        description: "34-36",
        recommended: "للأشخاص النحيفين",
        available_colors: ["Pure White", "Rose Gold"] 
      },
      { 
        value: "S", 
        description: "36-38", 
        recommended: "الحجم الأكثر شيوعاً",
        available_colors: ["Pure White", "Space Gray", "Rose Gold"] 
      },
      { 
        value: "M", 
        description: "38-40", 
        recommended: "مناسب لمعظم الأشخاص",
        available_colors: ["Pure White", "Space Gray", "Rose Gold", "Deep Blue"] 
      },
      { 
        value: "L", 
        description: "40-42", 
        recommended: "للأشخاص ذوي الجسم الرياضي",
        available_colors: ["Pure White", "Space Gray", "Deep Blue"] 
      },
      { 
        value: "XL", 
        description: "42-44", 
        recommended: "للأشخاص ذوي الجسم الكبير",
        available_colors: ["Space Gray", "Deep Blue"] 
      }
    ]
  };

  currentStep: { [key: number]: 'color' | 'size' | 'complete' } = {};

  getItemNumbers(): number[] {
    return Array.from({ length: this.numberOfItems }, (_, i) => i + 1);
  }

  onColorSelect(itemIndex: number, color: string) {
    if (!this.selectedOptions[itemIndex]) {
      this.selectedOptions[itemIndex] = {};
    }
    this.selectedOptions[itemIndex].color = color;
    this.currentStep[itemIndex] = 'size';
  }

  onSizeSelect(itemIndex: number, size: string) {
    if (!this.selectedOptions[itemIndex]) {
      this.selectedOptions[itemIndex] = {};
    }
    this.selectedOptions[itemIndex].size = size;
    this.currentStep[itemIndex] = 'complete';
  }

  isColorSelected(itemIndex: number, color: string): boolean {
    return this.selectedOptions[itemIndex]?.color === color;
  }

  isSizeSelected(itemIndex: number, size: string): boolean {
    return this.selectedOptions[itemIndex]?.size === size;
  }

  getCurrentStep(itemIndex: number): 'color' | 'size' | 'complete' {
    return this.currentStep[itemIndex] || 'color';
  }

  resetSelection(itemIndex: number) {
    this.selectedOptions[itemIndex] = {};
    this.currentStep[itemIndex] = 'color';
  }

  isSelectionComplete(itemIndex: number): boolean {
    return this.getCurrentStep(itemIndex) === 'complete';
  }

  getSelectedColorData(itemIndex: number) {
    const selectedColor = this.selectedOptions[itemIndex]?.color;
    return this.customOptions.color.find(c => c.value === selectedColor);
  }

  getSelectedSizeData(itemIndex: number) {
    const selectedSize = this.selectedOptions[itemIndex]?.size;
    return this.customOptions.size.find(s => s.value === selectedSize);
  }

  getTranslation(key: string): string {
    const translations: { [key: string]: string } = {
      'dynamicPanel.selectOptionsForProduct': 'اختر خيارات المنتج - النموذج الرابع'
    };
    return translations[key] || key;
  }
}