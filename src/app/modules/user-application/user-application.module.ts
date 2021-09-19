import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserApplicationListComponent} from './user-application-list/user-application-list.component';
import {UserApplicationCreateComponent} from './user-application-create/user-application-create.component';
import {UserApplicationLogComponent} from './user-application-log/user-application-log.component';
import {UserApplicationServiceComponent} from './user-application-service/user-application-service.component';
import {RouterModule} from '@angular/router';
import {userApplicationRoutes} from './user-application.routing';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { UserApplicationDetailComponent } from './user-application-detail/user-application-detail.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [UserApplicationListComponent,
    UserApplicationCreateComponent,
    UserApplicationLogComponent,
    UserApplicationServiceComponent,
    UserApplicationDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userApplicationRoutes),
    ClipboardModule,
    MatIconModule,
  ]
})
export class UserApplicationModule {
}
