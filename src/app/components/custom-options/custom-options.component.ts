import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-options',
  imports: [NgIf,NgFor],
  templateUrl: './custom-options.component.html',
  styleUrl: './custom-options.component.scss'
})
export class CustomOptionsComponent {
  @Input() numberOfItems: number = 1;

  selectedOptions: { [key: number]: { color?: string, size?: string } } = {};

  customOptions = {
    color: [
      {
        value: "Strawberry Buttercream",
        hex: "#f9adf9",
        available_options: {
          size: [
            {
              sku_id: 120,
              value: "L",
              hex: null,
              price: 500,
              price_after_discount: 350,
              qty: 7,
              image: "https://backend.dev.baseet.co/uploads/Product/CiHmH8VUWXX0pYY5OYsBRPQR4HCudhLmd6wiwFjT.jpg"
            },
            {
              sku_id: 124,
              value: "XS",
              hex: null,
              price: 500,
              price_after_discount: 450,
              qty: 9,
              image: "https://backend.dev.baseet.co/uploads/Product/phoVfbU4z0Fxw9vgHSmolv2SMuW6kNYwvIaWajDe.jpg"
            }
          ]
        }
      },
      {
        value: "Perrywinkle",
        hex: "#8c92e3",
        available_options: {
          size: [
            {
              sku_id: 122,
              value: "XS",
              hex: null,
              price: 500,
              price_after_discount: 250,
              qty: 5,
              image: "https://backend.dev.baseet.co/uploads/Product/H92wQzDHsGuXKTePiB90d1JN2zSFOwvptrXm21xm.avif"
            }
          ]
        }
      },
      {
        value: "Minty Paradise",
        hex: "#00FFBF",
        available_options: {
          size: [
            {
              sku_id: 135,
              value: "XL",
              hex: null,
              price: 600,
              price_after_discount: 430,
              qty: 5,
              image: "https://backend.dev.baseet.co/uploads/Product/x6Npy3gIYVT8LASgNKNA4EKO0JE9VnbDSaVodx0p.webp"
            },
            {
              sku_id: 136,
              value: "M",
              hex: null,
              price: 432,
              price_after_discount: 400,
              qty: 6,
              image: "https://backend.dev.baseet.co/uploads/null"
            },
            {
              sku_id: 137,
              value: "L",
              hex: null,
              price: 650,
              price_after_discount: 422,
              qty: 5,
              image: "https://backend.dev.baseet.co/uploads/null"
            }
          ]
        }
      }
    ],
    size: [
      {
        value: "L",
        hex: null,
        available_options: {
          color: [
            {
              sku_id: 120,
              value: "Strawberry Buttercream",
              hex: "#f9adf9",
              price: 500,
              price_after_discount: 350,
              qty: 7,
              image: "https://backend.dev.baseet.co/uploads/Product/CiHmH8VUWXX0pYY5OYsBRPQR4HCudhLmd6wiwFjT.jpg"
            },
            {
              sku_id: 137,
              value: "Minty Paradise",
              hex: "#00FFBF",
              price: 650,
              price_after_discount: 422,
              qty: 5,
              image: "https://backend.dev.baseet.co/uploads/null"
            }
          ]
        }
      },
      {
        value: "XS",
        hex: null,
        available_options: {
          color: [
            {
              sku_id: 122,
              value: "Perrywinkle",
              hex: "#8c92e3",
              price: 500,
              price_after_discount: 250,
              qty: 5,
              image: "https://backend.dev.baseet.co/uploads/Product/H92wQzDHsGuXKTePiB90d1JN2zSFOwvptrXm21xm.avif"
            },
            {
              sku_id: 124,
              value: "Strawberry Buttercream",
              hex: "#f9adf9",
              price: 500,
              price_after_discount: 450,
              qty: 9,
              image: "https://backend.dev.baseet.co/uploads/Product/phoVfbU4z0Fxw9vgHSmolv2SMuW6kNYwvIaWajDe.jpg"
            }
          ]
        }
      },
      {
        value: "XL",
        hex: null,
        available_options: {
          color: [
            {
              sku_id: 135,
              value: "Minty Paradise",
              hex: "#00FFBF",
              price: 600,
              price_after_discount: 430,
              qty: 5,
              image: "https://backend.dev.baseet.co/uploads/Product/x6Npy3gIYVT8LASgNKNA4EKO0JE9VnbDSaVodx0p.webp"
            }
          ]
        }
      },
      {
        value: "M",
        hex: null,
        available_options: {
          color: [
            {
              sku_id: 136,
              value: "Minty Paradise",
              hex: "#00FFBF",
              price: 432,
              price_after_discount: 400,
              qty: 6,
              image: "https://backend.dev.baseet.co/uploads/null"
            }
          ]
        }
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

  getTranslation(key: string): string {
    const translations: { [key: string]: string } = {
      'dynamicPanel.selectOptionsForProduct': 'اختر خيارات المنتج'
    };
    return translations[key] || key;
  }
}