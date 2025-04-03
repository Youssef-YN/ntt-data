import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent }, // Default Home Route
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths
];
