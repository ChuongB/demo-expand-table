import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'drag-drop-table',
  styleUrls: ['drag-drop-table.component.scss'],
  templateUrl: 'drag-drop-table.component.html',
})
export class DragDropTableComponent implements OnInit {
  displayedColumns: string[] = ['dragHandler', 'name', 'weight', 'symbol'];
  ELEMENT_DATA: PeriodicElement[];
  dataSource: any;
  dragDisabled = true;

  ngOnInit() {
    this.ELEMENT_DATA = [
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.dragDisabled = true;

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    // updates moved data and table, but not dynamic if more dropzones

    this.dataSource.data = _.cloneDeep(this.dataSource.data);
  }
}
