import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-blocks',
  imports : [NgFor,NgClass],
  templateUrl: './faq-blocks.component.html',
  styleUrls: ['./faq-blocks.component.scss']
})
export class FaqBlocksComponent {
  title = 'الأسئلة الشائعة';
  icon = 'fas fa-question-circle';

  faqs: Faq[] = [
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل جميع بطاقات الائتمان، الدفع عند الاستلام، والمحافظ الإلكترونية مثل فودافون كاش.'
    },
    {
      question: 'هل يمكنني استرجاع المنتج بعد الشراء؟',
      answer: 'نعم، يمكنك استرجاع المنتج خلال 14 يوم من تاريخ الاستلام بشرط أن يكون بحالته الأصلية.'
    },
    {
      question: 'كم تستغرق عملية الشحن؟',
      answer: 'عادةً ما يتم الشحن خلال 2 إلى 5 أيام عمل حسب المدينة أو المنطقة.'
    },
    {
      question: 'هل توجد رسوم شحن إضافية؟',
      answer: 'نعم، رسوم الشحن تعتمد على الموقع الجغرافي وتُحسب أثناء عملية الدفع.'
    },
    {
      question: 'كيف يمكنني تتبع طلبي؟',
      answer: 'بمجرد شحن الطلب، سيتم إرسال رقم التتبع إلى بريدك الإلكتروني ورقم الهاتف عبر رسالة نصية.'
    }
  ];

  openIndex: number | null = null;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}