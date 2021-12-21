import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ICellRendererParams,
  IAfterGuiAttachedParams
} from 'ag-grid-community';

@Component({
  selector: 'dc-checkbox-render',
  templateUrl: './checkbox-render.component.html',
  styleUrls: ['./checkbox-render.component.scss']
})
export class CheckboxRenderComponent
  implements ICellRendererAngularComp, OnDestroy {
  ngOnDestroy(): void {}
  refresh(params: ICellRendererParams): any {}
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {}
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  checkedHandler(event) {
    let checked = event.target.checked;
    let colId = this.params.column.colId;
    this.params.node.setDataValue(colId, checked);
  }
}
