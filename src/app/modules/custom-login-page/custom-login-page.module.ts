import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginPageComponent } from './custom-login-page.component';
import {
  TranslocoModule
} from '@ngneat/transloco';
import {RouterModule} from '@angular/router';
import {CustomLoginPageRoutes} from './custom-login-page.routing';


@NgModule({
  declarations: [CustomLoginPageComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule.forChild(CustomLoginPageRoutes),

  ]
})
export class CustomLoginPageModule { }
