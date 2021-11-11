import { Component, OnInit } from '@angular/core';
import { ClientService } from '@app/modules/client/_services/client-service';
import { DomainService } from '@app/modules/client/_services/domain-service';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { FormControl, FormGroup } from '@angular/forms';
import { Client, ClientDto } from '@app/modules/client/_modal/client-modal';
import { Domain } from '@app/modules/client/_modal/domain-modal';
import { MainSource } from '@app/core/authentication/_source';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertServices } from '@app/modules/alert/_service/alert-services';

@Component({
  selector: 'dc-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
    schema_name: new FormControl(''),
    created_on: new FormControl(''),
    owner: new FormControl(''),
    domains: new FormControl('')
  });
  constructor(
    private client$: ClientService,
    private domain$: DomainService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private alert$: AlertServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingService.startLoading();
    this.route.params.subscribe(params => {
      this.client$.getDetailClient(params.id).subscribe(data => {
        console.log(data);
        this.profileForm.patchValue(data);
        this.loadingService.stopLoading();
      });
    });
  }
  onSubmit(): void {
    this.loadingService.startLoadingForm();
    this.client$
      .update(this.profileForm.value.id, this.profileForm.value)
      .subscribe(data => {
        this.loadingService.stopLoading();
        this.alert$.success('Update Success');
      });
  }
  onDelete(): void {
    this.loadingService.startLoadingForm();
    this.client$.delete(this.profileForm.value.id).subscribe(data => {
      this.loadingService.stopLoading();
      this.router.navigateByUrl('client/list');
    });
  }
}
