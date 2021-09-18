import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [HeaderComponent, LeftNavComponent],
  exports: [
    HeaderComponent,
    LeftNavComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class CoreModule { }
