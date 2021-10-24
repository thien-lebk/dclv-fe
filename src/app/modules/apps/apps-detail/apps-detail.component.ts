import { Component, OnInit } from '@angular/core';
import {
  AppItemTypeEnum,
  TokenEnpoint
} from '@app/modules/apps/_modal/app-list-item-dto';
import { ActivatedRoute } from '@angular/router';
import { AppCreateService } from '@app/modules/app-create/_services/app-create-service';
import { AuthorizationGrantType } from '@app/modules/app-create/_modal/app-create-dto';
import { FormControl, FormGroup } from '@angular/forms';
import {GetAppDetailDto} from '../_modal/get-app-detail-dto'
import { MainSource } from '@app/core/authentication/_source';
import {AppType} from '../_enum/app-type';
import {ApplicationService} from '../_services/apps-service';
import { UpdateAppDetailDto } from '../_modal/update-app-detail-dto';
@Component({
  selector: 'dc-apps-detail',
  templateUrl: './apps-detail.component.html',
  styleUrls: ['./apps-detail.component.scss']
})
export class AppsDetailComponent implements OnInit {
  listAuthorizationGrantType = [
    {name:'Authorization Code',
    value:AuthorizationGrantType.AuthorizationCode
    },
    {name:'Client Credentials',
    value:AuthorizationGrantType.ClientCredentials
    },
    {name:'Implicit',
    value:AuthorizationGrantType.Implicit
    },
    {name:'Openid Hybrid',
    value:AuthorizationGrantType.OpenidHybrid
    },
    {name:'Password',
    value:AuthorizationGrantType.Password
    }
  ];
  listAppType = [
    {name:'HS256',
    value:AppType.HS256
    },
    {name:'RS256',
    value:AppType.RS256
    },
 
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
      domain: new FormControl(''),
    });
  constructor(private route: ActivatedRoute,
    private app$:ApplicationService,
    ) {}
    appDetail:GetAppDetailDto = new GetAppDetailDto();
    
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.app$.getDetailApp(params['id']).subscribe(res=>{
        this.appDetail = res;
        const urlSrc = localStorage.getItem('client');
        this.appDetail.domain = 'http://www.' + urlSrc + '.' + MainSource.domain;
        // this.profileForm.patchValue(res);
        this.profileForm.setValue(this.appDetail);
        
      })
    });
  }
  onSubmit():void {
    console.log(this.profileForm.value);
    console.log(123123);
    let updateAppDto:UpdateAppDetailDto = this.profileForm.value;
    this.app$.updateDetailApp(this.appDetail.id,updateAppDto).subscribe(res=>{
      console.log(res);
    })
  }
  onDelete():void {
    this.app$.deleteDetailApp(this.appDetail.id).subscribe(res=>{
      console.log(res);
    })
  }
}
