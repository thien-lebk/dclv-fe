import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { AppListComponent } from './app-list/app-list.component';
import { AppCreateComponent } from '../app-create/app-create.component';
import { AppsDetailComponent } from './apps-detail/apps-detail.component';
import { AppcreateDto } from '../app-create/_modal/app-create-dto';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: 'list',
    component: AppListComponent,
    data: { title: extract('List Application') }
  },
  {
    path: 'create',
    component: AppCreateComponent,
    data: { title: extract('Create Application') }
  },
  {
    path: 'detail/:id',
    component: AppsDetailComponent,
    data: { title: extract('Detail Application'), item: AppcreateDto }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule {}
