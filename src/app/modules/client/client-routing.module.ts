import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientSelectClientComponent } from './client-select-client/client-select-client.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: 'detail/:id',
    component: ClientDetailComponent,
    data: { title: extract('Client Detail') }
  },
  {
    path: 'list',
    component: ClientListComponent,
    data: { title: extract('Client List') }
  },
  {
    path: 'select/:name',
    component: ClientSelectClientComponent,
    data: { title: extract('Client List') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
