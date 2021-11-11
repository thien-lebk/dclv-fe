import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '@app/modules/role/_services/role-service';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { AlertServices } from '@app/modules/alert/_service/alert-services';
import { ClientDto } from '@app/modules/client/_modal/client-modal';
import { TenantApiService } from '@app/modules/tenant-api/_services/tenant-api-service';

@Component({
  selector: 'dc-tenant-api-detail',
  templateUrl: './tenant-api-detail.component.html',
  styleUrls: ['./tenant-api-detail.component.scss']
})
export class TenantApiDetailComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
    type: new FormControl('')
  });
  id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tenantApi$: TenantApiService,
    private loadingService: LoadingService,
    private alert$: AlertServices
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.tenantApi$.getDetail(this.id).subscribe(
        res => {
          console.log(this.profileForm.value);
          this.loadingService.stopLoading();
          this.profileForm.patchValue(res);
        },
        error => {
          this.alert$.error(error.error.detail);
          this.router.navigateByUrl('role/list');
        }
      );
    });
  }
  onDelete(): void {
    this.tenantApi$.delete(localStorage.getItem('client'), this.id).subscribe(
      ele => {
        this.loadingService.stopLoading();
        this.alert$.success('Delete Success');
        this.router.navigateByUrl('role/list');
      },
      error => {
        this.loadingService.stopLoading();
        this.alert$.error(error.error.detail);
      }
    );
  }
  onSubmit(): void {
    this.loadingService.startLoadingForm();
    const clientDto: ClientDto = new ClientDto();
    clientDto.name = this.profileForm.value.name;
    clientDto.schema_name = clientDto.name;
    // this.waring = { rePassword: '' };
    this.loadingService.startLoading();
    this.tenantApi$
      .update(this.profileForm.value, localStorage.getItem('client'), this.id)
      .subscribe(
        ele => {
          this.loadingService.stopLoading();
          this.alert$.success('Update Success');
        },
        error => {
          this.loadingService.stopLoading();
          console.log(error);
          // this.waring = error.error;
          // console.log(this.waring);
        }
      );
  }
}
