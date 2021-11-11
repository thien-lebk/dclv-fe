import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroMainPageComponent } from './intro-main-page/intro-main-page.component';
import { IntroRoutingModule } from './intro-routing.module';
import { SharedModule } from '../../shared';
import { MatIconModule } from '@angular/material/icon';
import { IntroQuickStartComponent } from './intro-quick-start/intro-quick-start.component';

@NgModule({
  declarations: [IntroMainPageComponent, IntroQuickStartComponent],
  imports: [CommonModule, IntroRoutingModule, SharedModule, MatIconModule]
})
export class IntroModule {}
