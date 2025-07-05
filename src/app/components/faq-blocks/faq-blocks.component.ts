import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-blocks',
  imports : [NgFor,NgClass,NgIf, CommonModule, FormsModule],
  templateUrl: './faq-blocks.component.html',
  styleUrls: ['./faq-blocks.component.scss']
})
export class FaqBlocksComponent {
  
  // FAQ Data
  title = 'الأسئلة الشائعة';
  icon = 'fas fa-question-circle';
  
  faqs = [
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نوفر عدة طرق للدفع تشمل البطاقات الائتمانية (فيزا، ماستركارد)، الدفع عند الاستلام، التحويل البنكي، والمحافظ الإلكترونية مثل فودافون كاش وأورانج موني.'
    },
    {
      question: 'كم تستغرق عملية التوصيل؟',
      answer: 'يتم التوصيل خلال 2-5 أيام عمل داخل القاهرة والجيزة، و3-7 أيام عمل للمحافظات الأخرى. نوفر أيضاً خدمة التوصيل السريع خلال 24 ساعة مقابل رسوم إضافية.'
    },
    {
      question: 'هل يمكنني إرجاع المنتج؟',
      answer: 'نعم، يمكنك إرجاع المنتج خلال 14 يوم من تاريخ الاستلام بشرط أن يكون في حالته الأصلية. نتحمل تكلفة الإرجاع في حالة وجود عيب في المنتج.'
    },
    {
      question: 'كيف يمكنني تتبع طلبي؟',
      answer: 'بمجرد تأكيد الطلب، ستحصل على رقم تتبع عبر الرسائل النصية والبريد الإلكتروني. يمكنك استخدام هذا الرقم لتتبع حالة طلبك على موقعنا أو تطبيق الهاتف.'
    },
    {
      question: 'هل تتوفر خدمة العملاء؟',
      answer: 'نعم، فريق خدمة العملاء متاح من السبت إلى الخميس من 9 صباحاً حتى 9 مساءً. يمكنك التواصل معنا عبر الهاتف، البريد الإلكتروني، أو الدردشة المباشرة على الموقع.'
    }
  ];

  // State management
  openIndex: number | null = null;
  selectedFaqIndex: number | null = null;
  currentFaqIndex: number = 0;
  openMinimalIndex: number | null = null;
  searchTerm: string = '';

  constructor() {
    // Initialize first FAQ as selected for split layout
    this.selectedFaqIndex = 0;
  }

  // Original accordion toggle
  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  // Minimal toggle
  toggleMinimal(index: number): void {
    this.openMinimalIndex = this.openMinimalIndex === index ? null : index;
  }

  // Card selection
  selectFaq(index: number): void {
    this.selectedFaqIndex = index;
    console.log('Selected FAQ:', this.faqs[index]);
    // You can add modal or navigation logic here
  }

  // Carousel navigation
  nextFaq(): void {
    if (this.currentFaqIndex < this.faqs.length - 1) {
      this.currentFaqIndex++;
    }
  }

  previousFaq(): void {
    if (this.currentFaqIndex > 0) {
      this.currentFaqIndex--;
    }
  }

  // Utility functions
  getShortAnswer(answer: string): string {
    return answer.length > 100 ? answer.substring(0, 100) : answer;
  }

  getShortTitle(question: string): string {
    return question.length > 50 ? question.substring(0, 50) + '...' : question;
  }

  // Search functionality
  getFilteredFaqs() {
    if (!this.searchTerm.trim()) {
      return this.faqs;
    }
    
    return this.faqs.filter(faq => 
      faq.question.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Track by function for performance
  trackByFaq(index: number, faq: any): string {
    return faq.question;
  }
}