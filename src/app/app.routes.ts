import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductFeatureBlocksComponent } from './components/product-feature-blocks/product-feature-blocks.component';
import { FaqBlocksComponent } from './components/faq-blocks/faq-blocks.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
            { path: 'home', component: HomeComponent },
            { path: 'product-features', component: ProductFeatureBlocksComponent },
            { path: 'faq', component: FaqBlocksComponent }
        ]
    },
    // You can add other top-level routes here if needed, for example, a 404 page.
    // { path: '**', component: PageNotFoundComponent }
];
