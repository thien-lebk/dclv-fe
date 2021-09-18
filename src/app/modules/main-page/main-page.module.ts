import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {RouterModule} from '@angular/router';
import {MainPageRouting} from './main-page.routing';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MainPageRouting)
  ]
})
export class MainPageModule { }
