import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '@app/shared/loader/_services/loading-services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoadingProgress = false;
  @Input() message: string | undefined;
  @Input() loadingForm = false;

  loadingSub: Subscription | undefined;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingSub = this.loadingService.loadingObject.subscribe(data => {
      // console.log(data);
      this.isLoadingProgress = data.loading;
      this.loadingForm = data.loadingForm;
    });
  }
}
