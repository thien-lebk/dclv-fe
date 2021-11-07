import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleListComponent } from './role-list/role-list.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: 'detail/:id',
    component: RoleDetailComponent,
    data: { title: extract('Role Detail') }
  },
  {
    path: 'list',
    component: RoleListComponent,
    data: { title: extract('Role List') }
  },
  {
    path: 'create',
    component: RoleCreateComponent,
    data: { title: extract('Role Create') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule {}
