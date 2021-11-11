import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantApiListComponent } from './tenant-api-list/tenant-api-list.component';
import { TenantApiDetailComponent } from './tenant-api-detail/tenant-api-detail.component';
import { TenantApiRoutingModule } from './tenant-api-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [TenantApiListComponent, TenantApiDetailComponent],
  imports: [
    CommonModule,
    TenantApiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class TenantApiModule {}
