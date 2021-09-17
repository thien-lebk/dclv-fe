import { Routes } from '@angular/router';
import {UserApplicationListComponent} from './user-application-list/user-application-list.component';
import {UserApplicationCreateComponent} from './user-application-create/user-application-create.component';

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
      {
        path: 'create',
        component: UserApplicationCreateComponent,
      },
    ]
  }
];
