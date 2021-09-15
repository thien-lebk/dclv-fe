import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadingService} from '../../services/loadingService';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  loadingSub: Subscription | undefined;

  @Input() loading = false;

  constructor(
    private loadingService: LoadingService

  ) { }

  ngOnInit(): void {
    this.loadingSub = this.loadingService.loadingObject
      .subscribe(data => {
        this.loading = data.loading;
      });
  }

}
