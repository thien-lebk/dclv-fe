import { Component, OnInit } from '@angular/core';
import {
  AppItemTypeEnum,
  TokenEnpoint
} from '@app/modules/apps/_modal/app-list-item-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dc-apps-detail',
  templateUrl: './apps-detail.component.html',
  styleUrls: ['./apps-detail.component.scss']
})
export class AppsDetailComponent implements OnInit {
  listAppType = [
    AppItemTypeEnum.SinglePageWebApplication,
    AppItemTypeEnum.MachineToMachineApplication,
    AppItemTypeEnum.Native,
    AppItemTypeEnum.RegularWebApplication
  ];
  tokenEnPoint = [TokenEnpoint.None, TokenEnpoint.Basic, TokenEnpoint.Post];
  logoSrc =
    'https://cdn.auth0.com/manhattan/versions/1.3420.0/assets/badge.png';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(v => console.log(v));
  }
}
