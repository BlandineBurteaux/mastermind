import { Component } from '@angular/core';
import { COLORS } from './cel/mock-cel';
import { Row } from './row/row';
import { Cel } from './cel/cel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Test';
  colors = COLORS;
  row:Row = new Row();

  onSelect(cel: Cel): void {
    console.log(this.row);
    this.row.cels.push(cel);
  }
}
