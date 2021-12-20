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
@Component({
  selector: 'dc-apps-detail',
  templateUrl: './apps-detail.component.html',
  styleUrls: ['./apps-detail.component.scss']
})
export class AppsDetailComponent implements OnInit {
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
    'https://cdn.auth0.com/manhattan/versions/1.3420.0/assets/badge.png';
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
  appDetail: GetAppDetailDto = new GetAppDetailDto();
  constructor(
    private route: ActivatedRoute,
    private app$: ApplicationService,
    private alert$: AlertServices,
    private router: Router,
    private loading$: LoadingService
  ) {}

  ngOnInit(): void {
    this.loading$.startLoading();
    this.route.params.subscribe(params => {
      this.app$.getDetailApp(params.id).subscribe(res => {
        this.appDetail = res;
        const urlSrc = localStorage.getItem('client');
        this.appDetail.domain = 'https://' + urlSrc + '.' + MainSource.domain;
        // this.profileForm.patchValue(res);
        this.profileForm.setValue(this.appDetail);
        this.loading$.stopLoading();
      });
    });
  }
  onSubmit(): void {
    this.loading$.startLoading();
    const updateAppDto: UpdateAppDetailDto = this.profileForm.value;
    updateAppDto.algorithm = AppType.RS256;
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
}
