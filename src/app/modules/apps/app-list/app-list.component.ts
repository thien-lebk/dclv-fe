import { Component, OnInit } from '@angular/core';
import {
  AppItemTypeEnum,
  AppListItemDto
} from '@app/modules/apps/_modal/app-list-item-dto';
import { AppCreateService } from '@app/modules/app-create/_services/app-create-service';
import { AppcreateDto } from '@app/modules/app-create/_modal/app-create-dto';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { Client } from '@app/modules/client/_modal/client-modal';
import { ClientService } from '@app/modules/client/_services/client-service';
import { PageEvent } from '@angular/material/paginator';
import { PaginationDto } from '@app/shared/dto/pagination-dto';
import { MenuClientDto } from '@app/shared/components/menu-client/menu-client.dto';

@Component({
  selector: 'dc-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  listItem: AppcreateDto[] = [];
  curList = [];
  currItem: any;
  listClientItem: Client[] = [];
  isOpenUserPopup = false;
  totalItem: number;
  hoverCopyContent = 'Copy';
  isLoadingClient = false;
  drawnList: AppcreateDto[];
  currClient: MenuClientDto = new MenuClientDto();
  private getParam = new PaginationDto();
  constructor(
    private app$: AppCreateService,
    private loadingService: LoadingService,
    private client$: ClientService
  ) {}
  changeSeachForm(data: any): void {
    const e = data.target.value;
    this.listClientItem = this.curList.filter(ele => {
      return ele.name.indexOf(e) !== -1;
    });
  }
  ngOnInit(): void {
    this.currItem = localStorage.getItem('client');
    this.loadingService.startLoading();
    this.app$.getListApp(this.currItem, this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.loadingService.stopLoading();
      this.totalItem = data.count;
    });
    this.isLoadingClient = true;
    const nameClient = localStorage.getItem('client');
    this.currClient.name = nameClient;
    this.currClient.domains = [{ domain: nameClient + '.kietteik.xyz' }];
  }
  onChangePaging(pageEvent: PageEvent) {
    // this.currItem = localStorage.getItem('client');
    this.getParam.limit = pageEvent.pageSize;
    this.getParam.page = pageEvent.pageIndex + 1;
    this.loadingService.startLoading();
    this.app$.getListApp(this.currItem, this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawnList = data.results;
      this.loadingService.stopLoading();
    });
  }
}
