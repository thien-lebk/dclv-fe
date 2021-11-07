import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleRoutingModule } from './role-routing.module';
import { RoleCreateComponent } from './role-create/role-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [RoleListComponent, RoleDetailComponent, RoleCreateComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    FontAwesomeModule,
    SharedModule,
    MatTabsModule
  ]
})
export class RoleModule {}
