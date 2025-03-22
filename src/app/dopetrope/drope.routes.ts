import {Routes} from "@angular/router";

export const dropRoutes: Routes = [
  {
    path: 'left-sidebar',
    loadComponent:() => import('../dopetrope/left-sidebar/left-sidebar.component').then(c => c.LeftSidebarComponent),
  },
  {
    path: 'right-sidebar',
    loadComponent:() =>import ('../dopetrope/right-sidebar/right-sidebar.component').then(c => c.RightSidebarComponent)
  },
  {
    path: 'no-sidebar',
    loadComponent:() =>import ('../dopetrope/no-sidebar/no-sidebar.component').then(c => c.NoSidebarComponent)
  }
]
