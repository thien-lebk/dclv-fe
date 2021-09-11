import { Routes } from '@angular/router';
import {CustomLoginPageComponent} from './custom-login-page.component';


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
    ]
  }
];
