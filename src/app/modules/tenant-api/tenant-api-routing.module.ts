import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { TenantApiDetailComponent } from './tenant-api-detail/tenant-api-detail.component';
import { TenantApiListComponent } from './tenant-api-list/tenant-api-list.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: 'detail/:id',
    component: TenantApiDetailComponent,
    data: { title: extract('Client Detail') }
  },
  {
    path: 'list',
    component: TenantApiListComponent,
    data: { title: extract('Client List') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantApiRoutingModule {}
