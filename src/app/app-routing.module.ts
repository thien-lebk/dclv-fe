import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [];


export const AppRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
      },
      // {
      //   path: 'homepage',
      //   loadChildren: () => import('./modules/center/center.module').then(m => m.CenterModule)
      // },
      {
        path: 'login',
        loadChildren: () => import('./modules/custom-login-page/custom-login-page.module').then(m => m.CustomLoginPageModule)
      },
    ],
    // canActivate: [AuthGuardServiceLogin],
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
