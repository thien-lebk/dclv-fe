import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { SharedModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientSelectClientComponent } from './client-select-client/client-select-client.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ClientDetailComponent,
    ClientListComponent,
    ClientSelectClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class ClientModule {}
