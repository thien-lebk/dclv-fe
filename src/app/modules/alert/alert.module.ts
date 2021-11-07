import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBasicComponent } from './alert-basic/alert-basic.component';

@NgModule({
  declarations: [AlertBasicComponent],
  imports: [CommonModule],
  exports: [AlertBasicComponent]
})
export class AlertModule {}
