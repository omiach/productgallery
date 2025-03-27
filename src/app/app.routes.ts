import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'productssearch', component: ProductSearchComponent },
    ],
  },
];
