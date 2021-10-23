import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { RouterModule } from '@angular/router';
import { AppsRoutingModule } from './apps-routing.module';
import { SharedModule } from '../../shared';
import { CountersModule } from '../../blocks/counters/counters.module';
import { FootersModule } from '../../blocks/footers/footers.module';
import { UsualModule } from '../../blocks/usual/usual.module';
import { ActionsModule } from '../../blocks/actions/actions.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ShellModule } from '../../shell/shell.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { AppsDetailComponent } from './apps-detail/apps-detail.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AppListComponent, AppsDetailComponent],
  imports: [
    CommonModule,
    AppsRoutingModule,
    SharedModule,
    CountersModule,
    FootersModule,
    UsualModule,
    ActionsModule,
    SwiperModule,
    ShellModule,
    NgbModule,
    FeatherModule,
    ClipboardModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class AppsModule {}
