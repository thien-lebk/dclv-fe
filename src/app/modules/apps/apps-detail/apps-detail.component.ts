import { Component, OnInit } from '@angular/core';
import {
  AppItemTypeEnum,
  TokenEnpoint
} from '@app/modules/apps/_modal/app-list-item-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { AppCreateService } from '@app/modules/app-create/_services/app-create-service';
import { AuthorizationGrantType } from '@app/modules/app-create/_modal/app-create-dto';
import { FormControl, FormGroup } from '@angular/forms';
import { GetAppDetailDto } from '../_modal/get-app-detail-dto';
import { MainSource } from '@app/core/authentication/_source';
import { AppType } from '../_enum/app-type';
import { ApplicationService } from '../_services/apps-service';
import { UpdateAppDetailDto } from '../_modal/update-app-detail-dto';
import { AlertServices } from '@app/modules/alert/_service/alert-services';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { MatDialog } from '@angular/material/dialog';
import { DialogRoleSelectPermissionComponent } from '@app/shared/dialog/dialog-role-select-permission/dialog-role-select-permission.component';
import { DialogRoleSelectPermissionDto } from '@app/shared/dialog/dialog-role-select-permission/_dto/dialog-role-select-permission.dto';
import { TenantApiService } from '@app/modules/tenant-api/_services/tenant-api-service';
import { PaginationDto } from '@app/shared/dto/pagination-dto';
@Component({
  selector: 'dc-apps-detail',
  templateUrl: './apps-detail.component.html',
  styleUrls: ['./apps-detail.component.scss']
})
export class AppsDetailComponent implements OnInit {
  listSelectePermission: DialogRoleSelectPermissionDto[] = [];

  listAuthorizationGrantType = [
    {
      name: 'Authorization Code',
      value: AuthorizationGrantType.AuthorizationCode
    },
    {
      name: 'Client Credentials',
      value: AuthorizationGrantType.ClientCredentials
    },
    { name: 'Implicit', value: AuthorizationGrantType.Implicit },
    { name: 'Openid Hybrid', value: AuthorizationGrantType.OpenidHybrid },
    { name: 'Password', value: AuthorizationGrantType.Password }
  ];
  listAppType = [
    { name: 'HS256', value: AppType.HS256 },
    { name: 'RS256', value: AppType.RS256 }
  ];
  tokenEnPoint = [TokenEnpoint.None, TokenEnpoint.Basic, TokenEnpoint.Post];
  logoSrc =
    'https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO.jpg';
  profileForm = new FormGroup({
    algorithm: new FormControl(''),
    authorization_grant_type: new FormControl(''),
    client_id: new FormControl(''),
    client_secret: new FormControl(''),
    client_type: new FormControl(''),
    created: new FormControl(''),
    updated: new FormControl(''),
    name: new FormControl(''),
    redirect_uris: new FormControl(''),
    skip_authorization: new FormControl(''),
    type: new FormControl(''),
    user: new FormControl(''),
    id: new FormControl(''),
    domain: new FormControl('')
  });
  currItem;
  private getParam = new PaginationDto();
  appDetail: GetAppDetailDto = new GetAppDetailDto();
  constructor(
    private route: ActivatedRoute,
    private app$: ApplicationService,
    private alert$: AlertServices,
    private router: Router,
    private loading$: LoadingService,
    private dialog: MatDialog,
    private tenantApi$: TenantApiService
  ) {}

  ngOnInit(): void {
    this.currItem = localStorage.getItem('client');
    this.getParam.limit = 1000;

    this.loading$.startLoading();
    this.route.params.subscribe(params => {
      this.app$.getDetailApp(params.id).subscribe(res => {
        this.appDetail = res;
        const urlSrc = localStorage.getItem('client');
        this.appDetail.domain = 'https://' + urlSrc + '.' + MainSource.domain;
        // this.profileForm.patchValue(res);
        let item = new GetAppDetailDto();
        item.algorithm = this.appDetail.algorithm;
        item.id = this.appDetail.id;
        item.client_id = this.appDetail.client_id;
        item.client_id = this.appDetail.client_id;
        item.client_secret = this.appDetail.client_secret;
        item.client_type = this.appDetail.client_type;
        item.created = this.appDetail.created;
        item.domain = this.appDetail.domain;
        item.name = this.appDetail.name;
        item.redirect_uris = this.appDetail.redirect_uris;
        item.skip_authorization = this.appDetail.skip_authorization;
        item.type = this.appDetail.type;
        item.updated = this.appDetail.updated;
        item.user = this.appDetail.user;
        item.authorization_grant_type = this.appDetail.authorization_grant_type;
        this.profileForm.setValue(item);

        this.tenantApi$
          .getList(this.currItem, this.getParam)
          .subscribe(data => {
            data.results.forEach(elementTeantList => {
              res.scopes.forEach(elementScope => {
                if (elementTeantList.id === elementScope) {
                  this.listSelectePermission.push(elementTeantList);
                }
              });
            });
            this.loading$.stopLoading();
          });
      });
    });
  }
  onSubmit(): void {
    this.loading$.startLoading();
    const updateAppDto: UpdateAppDetailDto = this.profileForm.value;
    updateAppDto.algorithm = AppType.RS256;
    let lstScope = [];
    this.listSelectePermission.forEach(ele => {
      lstScope.push(ele.id);
    });
    updateAppDto.scopes = lstScope;
    this.app$
      .updateDetailApp(this.appDetail.id, updateAppDto)
      .subscribe(res => {
        this.loading$.stopLoading();
        this.alert$.success('Update success');
      });
  }
  onDelete(): void {
    this.app$.deleteDetailApp(this.appDetail.id).subscribe(res => {
      this.alert$.success('Delete success');
      this.router.navigateByUrl('/applications/list');
    });
  }
  openDialogPermission() {
    const dialogRef = this.dialog.open(DialogRoleSelectPermissionComponent, {
      width: '100%',
      data: this.listSelectePermission
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listSelectePermission = result;
    });
  }
  removeSelectedPermission(id: any) {
    this.listSelectePermission = this.listSelectePermission.filter(
      ele => ele.id !== id
    );
  }
}
