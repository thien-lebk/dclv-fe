import { Routes } from '@angular/router';
import {UserApplicationListComponent} from './user-application-list/user-application-list.component';

export const userApplicationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UserApplicationListComponent,
      },

    ]
  }
];
