import { Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register/register.component';

export const loginRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ]
  }
];
