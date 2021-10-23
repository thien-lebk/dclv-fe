import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ClientType,
  AuthorizationGrantType,
  AppcreateDto
} from './_modal/app-create-dto';
import { AppCreateService } from '@app/modules/app-create/_services/app-create-service';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
@Component({
  selector: 'dc-app-create',
  templateUrl: './app-create.component.html',
  styleUrls: ['./app-create.component.scss']
})
export class AppCreateComponent implements OnInit {
  selectedAuthorizationGrantType: AuthorizationGrantType;
  clientType: ClientType;
  profileForm = new FormGroup({
    name: new FormControl('')
  });
  appName = '';
  constructor(
    private appCreate$: AppCreateService,
    private appLoading$: LoadingService
  ) {}
  public get ClientType() {
    return ClientType;
  }
  public get AuthorizationGrantType() {
    return AuthorizationGrantType;
  }
  ngOnInit(): void {}
  onSubmit(): void {
    this.appLoading$.startLoadingForm();
    const data: AppcreateDto = new AppcreateDto();
    data.name = this.appName;
    data.authorization_grant_type = this.selectedAuthorizationGrantType;
    data.client_type = this.clientType;
    const clientName = localStorage.getItem('client');

    this.appCreate$.createApp(data, clientName).subscribe(data2 => {
      this.appLoading$.stopLoadingForm();
    });
  }
}
