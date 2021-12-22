import { TenantApiService } from '@app/modules/tenant-api/_services/tenant-api-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RoleService } from '@app/modules/role/_services/role-service';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientDto } from '@app/modules/client/_modal/client-modal';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { AlertServices } from '@app/modules/alert/_service/alert-services';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogRoleSelectClientComponent } from '@app/shared/dialog/dialog-role-select-client/dialog-role-select-client.component';
import { GetUserDetailDto } from '@app/modules/user/_dto/get-user-detail-dto';
import { DialogRoleSelectClientDto } from '@app/shared/dialog/dialog-role-select-client/.dto/dialog-role-select-client.dto';
import { UpdateRoleDto } from '@app/modules/role/_dto/UpdateRole.dto';
import { DialogRoleSelectPermissionComponent } from '@app/shared/dialog/dialog-role-select-permission/dialog-role-select-permission.component';
import { DialogRoleSelectPermissionDto } from '@app/shared/dialog/dialog-role-select-permission/_dto/dialog-role-select-permission.dto';
@Component({
  selector: 'dc-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    id: new FormControl('')
  });
  id: string;
  listSelectedUser: DialogRoleSelectClientDto[] = [];
  listSelectePermission: DialogRoleSelectPermissionDto[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private role$: RoleService,
    private loadingService: LoadingService,
    private alert$: AlertServices,
    private dialog: MatDialog,
    private tenantPer$: TenantApiService
  ) {}
  openDialogUser(): void {
    const dialogRef = this.dialog.open(DialogRoleSelectClientComponent, {
      width: '100%',
      data: this.listSelectedUser
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listSelectedUser = result;
    });
  }
  openDialogPermission(): void {
    const dialogRef = this.dialog.open(DialogRoleSelectPermissionComponent, {
      width: '100%',
      data: this.listSelectePermission
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listSelectePermission = result;
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.role$.getDetailRole(this.id).subscribe(
        res => {
          this.loadingService.stopLoading();
          this.profileForm.patchValue(res);
          this.listSelectedUser = res.users;
          this.listSelectePermission = res.permissions;
        },
        error => {
          this.alert$.error(error.error.detail);
          this.router.navigateByUrl('role/list');
        }
      );
    });
  }
  onDelete(): void {
    this.role$.deleteRole(localStorage.getItem('client'), this.id).subscribe(
      ele => {
        this.loadingService.stopLoading();
        this.alert$.success('Delete Success');
        this.router.navigateByUrl('role/list');
      },
      error => {
        this.loadingService.stopLoading();
        this.alert$.error(error.error.detail);
      }
    );
  }
  onSubmit(): void {
    this.loadingService.startLoadingForm();
    const clientDto: ClientDto = new ClientDto();
    clientDto.name = this.profileForm.value.name;
    clientDto.schema_name = clientDto.name;
    const updateRoleDto = new UpdateRoleDto();
    const users = [];
    this.listSelectedUser.forEach(ele => {
      users.push(ele.id);
    });
    const permissions = [];
    this.listSelectePermission.forEach(ele => {
      permissions.push(ele.id);
    });
    updateRoleDto.id = this.profileForm.value.id;
    updateRoleDto.name = this.profileForm.value.name;
    updateRoleDto.description = this.profileForm.value.description;
    updateRoleDto.users = users;
    updateRoleDto.permissions = permissions;
    // this.waring = { rePassword: '' };
    this.loadingService.startLoading();
    this.role$
      .updateRole(updateRoleDto, localStorage.getItem('client'), this.id)
      .subscribe(
        ele => {
          this.loadingService.stopLoading();
          this.alert$.success('Update Success');
        },
        error => {
          this.loadingService.stopLoading();
          console.log(error);
          // this.waring = error.error;
          // console.log(this.waring);
        }
      );
  }
  removeSelectedPermission(id: any) {
    this.listSelectePermission = this.listSelectePermission.filter(
      ele => ele.id !== id
    );
  }
  removeSelectedUser(id: any) {
    this.listSelectedUser = this.listSelectedUser.filter(ele => ele.id !== id);
  }
}
