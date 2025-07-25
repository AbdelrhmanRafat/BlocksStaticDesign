import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductFeatureBlocksComponent } from './components/product-feature-blocks/product-feature-blocks.component';
import { FaqBlocksComponent } from './components/faq-blocks/faq-blocks.component';
import { BeforAfterBlocksComponent } from './components/befor-after-blocks/befor-after-blocks.component';
import { CountDownBlocksComponent } from './components/count-down-blocks/count-down-blocks.component';
import { FooterBlocksComponent } from './components/footer-blocks/footer-blocks.component';
import { FormFieldBlocksComponent } from './components/form-field-blocks/form-field-blocks.component';
import { ImageTextBlocksComponent } from './components/image-text-blocks/image-text-blocks.component';
import { ModalPurchaseInfoBlocksComponent } from './components/modal-purchase-info-blocks/modal-purchase-info-blocks.component';
import { OrderConfirmationNoticeBlocksComponent } from './components/order-confirmation-notice-blocks/order-confirmation-notice-blocks.component';
import { ProducBlocksComponent } from './components/produc-blocks/produc-blocks.component';
import { ProductFunnelBlocksComponent } from './components/product-funnel-blocks/product-funnel-blocks.component';
import { ProductPreviewBlocksComponent } from './components/product-preview-blocks/product-preview-blocks.component';
import { ProductUsageBlocksComponent } from './components/product-usage-blocks/product-usage-blocks.component';
import { RatesBlocksComponent } from './components/rates-blocks/rates-blocks.component';
import { ReviewsBlocksComponent } from './components/reviews-blocks/reviews-blocks.component';
import { TodayOrdersBlocksComponent } from './components/today-orders-blocks/today-orders-blocks.component';
import { CouponBlocks } from './components/coupon-blocks/coupon-blocks';
import { ButtonWithLinkBlocks } from './components/button-with-link-blocks/button-with-link-blocks';
import { FakeVisitorsBlocks } from './components/fake-visitors-blocks/fake-visitors-blocks';
import { GridImagesGalleryBlocks } from './components/grid-images-gallery-blocks/grid-images-gallery-blocks';
import { LogosCarouselBlocks } from './components/logos-carousel-blocks/logos-carousel-blocks';
import { TextBarBlocks } from './components/text-bar-blocks/text-bar-blocks';
import { TodayStatisticsBlocks } from './components/today-statistics-blocks/today-statistics-blocks';
import { ImageTextOverlayComponent } from './components/image-text-overlay/image-text-overlay.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
            { path: 'home', component: HomeComponent },
            { path: 'product-features', component: ProductFeatureBlocksComponent },
            { path: 'faq', component: FaqBlocksComponent },
            { path: 'befor-after-blocks', component: BeforAfterBlocksComponent },
            { path: 'count-down-blocks', component: CountDownBlocksComponent },
            { path: 'footer-blocks', component: FooterBlocksComponent },
            { path: 'form-field-blocks', component: FormFieldBlocksComponent },
            { path: 'image-text-blocks', component: ImageTextBlocksComponent },
            { path: 'image-text-2-blocks', component: ImageTextOverlayComponent },
            { path: 'modal-purchase-info-blocks', component: ModalPurchaseInfoBlocksComponent },
            { path: 'order-confirmation-notice-blocks', component: OrderConfirmationNoticeBlocksComponent },
            { path: 'produc-blocks', component: ProducBlocksComponent },
            { path: 'product-funnel-blocks', component: ProductFunnelBlocksComponent },
            { path: 'product-preview-blocks', component: ProductPreviewBlocksComponent },
            { path: 'product-usage-blocks', component: ProductUsageBlocksComponent },
            { path: 'rates-blocks', component: RatesBlocksComponent },
            { path: 'reviews-blocks', component: ReviewsBlocksComponent },
            { path: 'today-orders-blocks', component: TodayOrdersBlocksComponent },
            { path: 'button-with-link-blocks', component: ButtonWithLinkBlocks },
            { path: 'coupon-blocks', component: CouponBlocks },
            { path: 'fake-visitors-blocks', component: FakeVisitorsBlocks },
            { path: 'grid-images-gallery-blocks', component: GridImagesGalleryBlocks },
            { path: 'logos-carousel-blocks', component: LogosCarouselBlocks },
            { path: 'today-statistics-blocks', component: TodayStatisticsBlocks },
            { path: 'text-bar-blocks', component: TextBarBlocks }
        ]
    },
    // You can add other top-level routes here if needed, for example, a 404 page.
    // { path: '**', component: PageNotFoundComponent }
];
