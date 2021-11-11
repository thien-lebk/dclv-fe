import { Component, Input, OnInit } from '@angular/core';
import {
  AppItemTypeEnum,
  AppListItemDto
} from '@app/modules/apps/_modal/app-list-item-dto';
import { AppCreateService } from '@app/modules/app-create/_services/app-create-service';
import { ClientService } from '@app/modules/client/_services/client-service';
import { FormControl, FormGroup } from '@angular/forms';
import { Client, ClientDto } from '@app/modules/client/_modal/client-modal';
import { DomainService } from '@app/modules/client/_services/domain-service';
import { Domain } from '@app/modules/client/_modal/domain-modal';
import { MainSource } from '@app/core/authentication/_source';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { DropdownDto } from '@app/shared/components/dropdown/dropdown-dto';
import { PageEvent } from '@angular/material/paginator';
import { GetParamListUser } from '@app/modules/user/_dto/get-list-user-dto';

@Component({
  selector: 'dc-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  listItem: Client[] = [];
  drawList: Client[] = [];

  toggleForm = false;
  warning = '';
  profileForm = new FormGroup({
    name: new FormControl('')
  });
  currClient: Client = new Client();

  dropdownOption: DropdownDto[];

  getParam = new GetParamListUser();
  currSortValue: string;
  paramSearch: string;
  searchType: string;
  totalItem: number;

  constructor(
    private client$: ClientService,
    private domain$: DomainService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getParam.ordering = 'name';
    this.loadingService.startLoading();
    this.client$.get(this.getParam).subscribe(data => {
      this.listItem = data.results;
      const nameClient = localStorage.getItem('client');
      if (nameClient) {
        this.currClient = this.listItem.find(ele => ele.name === nameClient);
      }
      this.totalItem = data.count;
      this.loadingService.stopLoading();
    });
  }

  goToUrl(url: string): void {
    window.location.href = 'http://www.' + url;
  }

  selectClient(name: string): void {
    localStorage.setItem('client', name);
    this.currClient = this.listItem.find(ele => ele.name === name);
  }
  onClickSort(param: string) {
    this.loadingService.startLoading();
    if (param !== this.currSortValue) {
      this.currSortValue = param;
    } else {
      this.currSortValue = null;
    }
    this.getParam.ordering = this.currSortValue;
    this.client$.get(this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawList = data.results;
      this.loadingService.stopLoading();
    });
  }

  onChangeSearch() {
    this.getParam.search = this.paramSearch;
    this.loadingService.startLoading();
    this.client$.get(this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawList = data.results;
      this.loadingService.stopLoading();
    });
  }

  onChangePaging(pageEvent: PageEvent) {
    this.getParam.limit = pageEvent.pageSize;
    this.getParam.page = pageEvent.pageIndex + 1;
    this.loadingService.startLoading();
    this.client$.get(this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawList = data.results;
      this.loadingService.stopLoading();
    });
  }
  onSubmit(): void {
    this.loadingService.startLoadingForm();
    const clientDto: ClientDto = new ClientDto();
    clientDto.name = this.profileForm.value.name;
    clientDto.schema_name = clientDto.name;
    this.client$.create(clientDto).subscribe(
      data => {
        const client: Client = data;
        const domain: Domain = new Domain();
        domain.tenant_id = client.id;
        domain.domain = client.name + '.' + MainSource.domain;
        this.domain$.create(domain).subscribe(res => {
          window.location.reload();
        });
      },
      error => {
        this.warning = error.error.schema_name[0];
        this.loadingService.stopLoading();
      }
    );
  }
}
