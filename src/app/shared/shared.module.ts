import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [LoadingSpinnerComponent, AlertComponent],
  exports: [
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ]
})
export class SharedModule { }
