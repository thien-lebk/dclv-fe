import { Component, OnInit } from '@angular/core';
import { RoleService } from '../_services/role-service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { Client, ClientDto } from '@app/modules/client/_modal/client-modal';
import { Domain } from '@app/modules/client/_modal/domain-modal';
import { MainSource } from '@app/core/authentication/_source';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { PageEvent } from '@angular/material/paginator';
import { PaginationDto } from '@app/shared/dto/pagination-dto';

@Component({
  selector: 'dc-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  faBars = faBars;
  totalItem: number;
  currItem: any;
  listItem: any;
  drawList: any;
  toggleForm = false;
  paramSearch: string;
  searchType = 'name';
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });
  private getParam = new PaginationDto();

  constructor(
    private role$: RoleService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.currItem = localStorage.getItem('client');
    this.loadingService.startLoading();
    this.getParam.limit = 1000;
    this.role$.getListRole(this.currItem, this.getParam).subscribe(data => {
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
    // this.waring = { rePassword: '' };
    this.loadingService.startLoading();
    this.role$
      .createRole(this.profileForm.value, localStorage.getItem('client'))
      .subscribe(
        ele => {
          console.log(this.profileForm.value);
          this.listItem.push(this.profileForm.value);
          this.loadingService.stopLoading();
        },
        error => {
          this.loadingService.stopLoading();
          console.log(error);
          // this.waring = error.error;
          // console.log(this.waring);
        }
      );
  }

  searchList(value: any) {
    if (value === '') {
      this.paramSearch = value;
    }
    // tslint:disable-next-line:max-line-length
    this.listItem = this.drawList.filter(
      ele =>
        ele[this.searchType]
          .toLocaleLowerCase()
          .indexOf(value.toLocaleLowerCase()) !== -1
    );
  }
}
