import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {UserApplicationListComponent} from './modules/user-application/user-application-list/user-application-list.component';

import {AuthGuardService} from './services/authGuard.service';
const routes: Routes = [];


export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main-page/main-page.module').then(m => m.MainPageModule),
    canActivate: [AuthGuardService],
  },

  // {
  //   path: 'homepage',
  //   loadChildren: () => import('./modules/center/center.module').then(m => m.CenterModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modules/custom-login-page/custom-login-page.module').then(m => m.CustomLoginPageModule)
  // },
  {
    path: 'user-application',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/user-application/user-application.module').then(m => m.UserApplicationModule)
  },
  {
    path: 'auth',
    // canActivate: [!AuthGuardService],

    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'auth/login'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
