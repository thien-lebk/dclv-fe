import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule {}
