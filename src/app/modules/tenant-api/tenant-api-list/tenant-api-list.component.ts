import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoleService } from '@app/modules/role/_services/role-service';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { ClientDto } from '@app/modules/client/_modal/client-modal';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { TenantApiService } from '@app/modules/tenant-api/_services/tenant-api-service';
import { PaginationDto } from '@app/shared/dto/pagination-dto';

@Component({
  selector: 'dc-tenant-api-list',
  templateUrl: './tenant-api-list.component.html',
  styleUrls: ['./tenant-api-list.component.scss']
})
export class TenantApiListComponent implements OnInit {
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
    url: new FormControl(''),
    type: new FormControl('')
  });
  private getParam = new PaginationDto();

  constructor(
    private tenantApi$: TenantApiService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.currItem = localStorage.getItem('client');
    this.loadingService.startLoading();
    this.getParam.limit = 1000;
    this.tenantApi$.getList(this.currItem, this.getParam).subscribe(data => {
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
    this.tenantApi$
      .create(this.profileForm.value, localStorage.getItem('client'))
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
