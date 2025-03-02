import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'grid',
    loadComponent:() => import('./grid/grid.component').then(c => c.GridComponent)
  },
  {
    path: 'website',
    loadComponent:() => import('./website/website.component').then(c => c.WebsiteComponent)
  }
];
