import { Component } from '@angular/core';
import { TableRow } from '../table-row/table-row';

@Component({
  selector: 'tbody[table-body]',
  imports: [TableRow],
  templateUrl: './table-body.html',
})
export class TableBody {}
