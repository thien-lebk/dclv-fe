import { Component, Input, OnInit } from '@angular/core';
import { DropdownDto } from '@app/shared/components/dropdown/dropdown-dto';

@Component({
  selector: 'dc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() data: DropdownDto[] = [];
  constructor() {}

  ngOnInit(): void {}
}
