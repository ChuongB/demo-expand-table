import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { initial } from 'lodash';

@Component({
  selector: 'app-inner-table',
  templateUrl: './inner-table.component.html',
  styleUrls: ['./inner-table.component.scss'],
})
export class InnerTableComponent implements OnInit {
  @Input() addresses: Array<Address>;

  constructor() {}
  columnsToDisplay = ['street', 'zipCode', 'city'];
  dataSource: MatTableDataSource<Address>;
  ngOnInit(): void {
    this.initialDataSource(this.addresses);
  }

  initialDataSource(addresses: Array<Address>) {
    if (addresses && Array.isArray(addresses) && addresses.length) {
      this.dataSource = new MatTableDataSource(this.addresses);
    }
  }
}

export interface Address {
  street: string;
  zipCode: string;
  city: string;
}
