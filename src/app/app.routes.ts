import { Routes } from '@angular/router';
import {dropRoutes} from "./dopetrope/drope.routes";

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
  },
  {
    path: 'dopetrope',
    loadComponent:() => import('./dopetrope/dopetrope.component').then(c => c.DopetropeComponent),
    children: dropRoutes
  }
];
