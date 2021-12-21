import { CheckboxRenderComponent } from './../../ag-grid-custom/checkbox-render/checkbox-render.component';
import { TenantApiService } from './../../../modules/tenant-api/_services/tenant-api-service';
import { Component, Inject, OnInit } from '@angular/core';
import { DialogRoleSelectPermissionDto } from '@app/shared/dialog/dialog-role-select-permission/_dto/dialog-role-select-permission.dto';
import { PaginationDto } from '@app/shared/dto/pagination-dto';
import { ColDef } from 'ag-grid-community';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dc-dialog-role-select-permission',
  templateUrl: './dialog-role-select-permission.component.html',
  styleUrls: ['./dialog-role-select-permission.component.scss']
})
export class DialogRoleSelectPermissionComponent implements OnInit {
  selectedPermission: DialogRoleSelectPermissionDto[] = [];
  currItem;
  private getParam = new PaginationDto();
  listItem: DialogRoleSelectPermissionDto[] = [];
  drawList: DialogRoleSelectPermissionDto[] = [];
  rowData = [];
  frameworkComponents;

  constructor(
    private tenantApi$: TenantApiService,
    @Inject(MAT_DIALOG_DATA) public data: DialogRoleSelectPermissionDto[]
  ) {}

  ngOnInit(): void {
    this.frameworkComponents = {
      checkboxRenderer: CheckboxRenderComponent
    };
    this.currItem = localStorage.getItem('client');
    this.getParam.limit = 1000;
    this.tenantApi$.getList(this.currItem, this.getParam).subscribe(data => {
      data.results.forEach(element => {
        let item = new DialogRoleSelectPermissionDto();
        item.id = element.id;
        item.name = element.name;
        item.type = element.type;
        item.url = element.url;
        this.drawList.push(item);
      });
      this.data.forEach(ele1 => {
        this.drawList.forEach(ele2 => {
          if (ele1.id === ele2.id) {
            ele2.select = true;
          }
        });
      });
      this.rowData = this.drawList;
    });
  }
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'type' },
    { field: 'select', cellRenderer: 'checkboxRenderer' }
  ];

  onSelectionChanged(event: any) {
    let selectdata = event.api.getSelectedNodes();
    let selectedRow = event.api.getSelectedRows();
    if (!this.selectedPermission.find(ele => ele.id === selectedRow[0].id)) {
      this.selectedPermission.push(selectedRow[0]);
    }
  }

  onCloseDialog() {
    return this.drawList.filter(ele => ele.select === true);
  }
}
