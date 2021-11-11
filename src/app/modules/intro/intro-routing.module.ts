import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { IntroMainPageComponent } from './intro-main-page/intro-main-page.component';
import { SharedModule } from '../../shared';
import { IntroQuickStartComponent } from './intro-quick-start/intro-quick-start.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: 'page',
    component: IntroMainPageComponent,
    data: { title: extract('Introduction page') }
  },
  {
    path: 'quick-start',
    component: IntroQuickStartComponent,
    data: { title: extract('Quick start') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule {}
