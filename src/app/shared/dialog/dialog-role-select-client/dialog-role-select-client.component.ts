import { CheckboxRenderComponent } from './../../ag-grid-custom/checkbox-render/checkbox-render.component';
import { TenantApiService } from './../../../modules/tenant-api/_services/tenant-api-service';
import { Component, Inject, OnInit } from '@angular/core';
import { DialogRoleSelectPermissionDto } from '@app/shared/dialog/dialog-role-select-permission/_dto/dialog-role-select-permission.dto';
import { PaginationDto } from '@app/shared/dto/pagination-dto';
import { ColDef } from 'ag-grid-community';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '@app/modules/user/_services/user-service';
import { DialogRoleSelectClientDto } from './.dto/dialog-role-select-client.dto';

@Component({
  selector: 'dc-dialog-role-select-client',
  templateUrl: './dialog-role-select-client.component.html',
  styleUrls: ['./dialog-role-select-client.component.scss']
})
export class DialogRoleSelectClientComponent implements OnInit {
  selectedPermission: DialogRoleSelectClientDto[] = [];
  currItem;
  private getParam = new PaginationDto();
  listItem: DialogRoleSelectClientDto[] = [];
  drawList: DialogRoleSelectClientDto[] = [];
  rowData = [];
  frameworkComponents;

  constructor(
    private tenantApi$: TenantApiService,
    private user$: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogRoleSelectClientDto[]
  ) {}

  ngOnInit(): void {
    this.frameworkComponents = {
      checkboxRenderer: CheckboxRenderComponent
    };
    this.currItem = localStorage.getItem('client');
    this.getParam.limit = 1000;
    this.user$.getListUser(this.currItem, this.getParam).subscribe(data => {
      console.log(data);

      data.results.forEach(element => {
        let item = new DialogRoleSelectClientDto();
        item.id = element.id;
        item.name = element.name;
        item.email = element.email;
        item.phone = element.phone;
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
    { field: 'email' },
    { field: 'name' },
    { field: 'phone' },
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
