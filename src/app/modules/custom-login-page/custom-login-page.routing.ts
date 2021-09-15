import { Routes } from '@angular/router';
import {CustomLoginPageComponent} from './custom-login-page.component';
import {GetUserComponent} from './get-user/get-user.component';


export const CustomLoginPageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
      },
      {
        path: 'page',
        component: CustomLoginPageComponent,
      },
      {
        path: 'user',
        component: GetUserComponent,
      },
    ]
  }
];
