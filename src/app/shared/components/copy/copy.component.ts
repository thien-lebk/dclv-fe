import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dc-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent implements OnInit {
  hoverCopyContent;
  @Input() content;
  constructor() {}

  ngOnInit(): void {}
}
