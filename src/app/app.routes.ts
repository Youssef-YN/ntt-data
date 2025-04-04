import { Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent),
        data: { hideSidebar: true }
      }
    ]
  }
];
