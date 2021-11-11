import { HttpParams } from '@angular/common/http';

export function convertObjectToParamHttpRequest(data: object) {
  let params = new HttpParams(data);
  // tslint:disable-next-line:forin
  for (const property in data) {
    params = params.append(`${property}`, data[property]);
  }
  return params;
}
