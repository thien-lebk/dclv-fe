import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {LeftNavComponent} from './left-nav/left-nav.component';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, LeftNavComponent],
  exports: [
    HeaderComponent,
    LeftNavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ]
})
export class CoreModule {
}
