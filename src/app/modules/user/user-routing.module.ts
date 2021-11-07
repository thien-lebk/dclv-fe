import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ListComponent } from './list/list.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  // {
  //   path: 'detail',
  //   component: ClientDetailComponent,
  //   data: { title: extract('Client Detail') }
  // },
  {
    path: 'create',
    component: UserCreateComponent,
    data: { title: extract('Create  User') }
  },
  {
    path: 'list',
    component: ListComponent,
    data: { title: extract('User List') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
