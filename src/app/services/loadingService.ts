import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Loading} from '../modal/Loading/Loading';

@Injectable({providedIn: 'root'})
export class LoadingService {
  loadingObject: Subject<any> = new Subject();
  loadingObservable = this.loadingObject.asObservable();
  data: Loading = new Loading();
  loading(data: Loading): void {
    return this.loadingObject.next(data);
  }

  startLoading(): void {
    this.data.loading = true;
    this.data.loadingForm = false;
    return this.loadingObject.next(this.data);
  }

  stopLoading(): void {
    this.data.loading = false;
    this.data.loadingForm = false;
    return this.loadingObject.next(this.data);
  }
}
