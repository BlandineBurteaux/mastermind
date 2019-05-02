import { Component, OnInit, Input } from '@angular/core';
import { Row } from './row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass']
})
export class RowComponent implements OnInit {
  @Input() row: Row;

  constructor() { }

  ngOnInit() {
  }

}
