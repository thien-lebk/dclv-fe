import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'dc-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  listItem: Client[] = [];
  toggleForm = false;
  hoverCopyContent = 'Copy';
  profileForm = new FormGroup({
    name: new FormControl('')
  });
  constructor(
    private client$: ClientService,
    private domain$: DomainService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.startLoading();
    this.client$.get().subscribe(data => {
      this.listItem = data.results;
      this.loadingService.stopLoading();
      console.log(data);
      
    });
    // this.domain$.get().subscribe(data=>{
    //   console.log(data);
    // })
    // this.domain$.gettest().subscribe(data=>{
    //   console.log(data);
    // })
  }
  goToUrl(url: string): void {
    window.location.href = 'http://www.' + url;
  }
  selectClient(name: string): void {
    localStorage.setItem('client', name);
  }
  onSubmit(): void {
    this.loadingService.startLoadingForm();
    console.log(this.profileForm.value);
    const clientDto: ClientDto = new ClientDto();
    clientDto.name = this.profileForm.value.name;
    clientDto.schema_name = clientDto.name;
    this.client$.create(clientDto).subscribe(data => {
      const client: Client = data;
      const domain: Domain = new Domain();
      domain.tenant_id = client.id;
      domain.domain = client.name + '.' + MainSource.domain;
      this.domain$.create(domain).subscribe(res => {
        window.location.reload();
      });
    });
  }
}
