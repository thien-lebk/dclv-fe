import { Component, OnInit } from '@angular/core';
import { DialogRoleSelectPermissionDto } from '@app/shared/dialog/dialog-role-select-permission/_dto/dialog-role-select-permission.dto';

@Component({
  selector: 'dc-dialog-role-select-permission',
  templateUrl: './dialog-role-select-permission.component.html',
  styleUrls: ['./dialog-role-select-permission.component.scss']
})
export class DialogRoleSelectPermissionComponent implements OnInit {
  selectedPermission: DialogRoleSelectPermissionDto[] = [];

  permission: DialogRoleSelectPermissionDto[] = [
    { id: 1, name: 'Admin', type: 'System', url: '/api/users/<pk>/' },
    { id: 2, name: 'User', type: 'System', url: '/api/users/' }
  ];
  constructor() {}

  ngOnInit(): void {}

  onCloseDialog() {
    console.log([this.selectedPermission]);
    return [this.selectedPermission];
  }
}
