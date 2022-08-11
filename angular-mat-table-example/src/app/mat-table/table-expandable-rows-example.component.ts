import {
  Component,
  ViewChild,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @title Table with expandable rows
 */

const detailExpand = trigger('detailExpand', [
  state('collapsed', style({ height: '0px', minHeight: '0' })),
  state('expanded', style({ height: '*' })),
  transition(
    'expanded <=> collapsed',
    animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
  ),
]);

@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.component.scss'],
  templateUrl: 'table-expandable-rows-example.component.html',
  animations: [detailExpand],
})
export class TableExpandableRowsExample {
  dataSource: MatTableDataSource<User>;
  usersData: User[] = [];
  columnsToDisplay = ['expandable', 'name', 'email', 'phone'];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  expandedElement: User | null;

  checklistSelection = new SelectionModel<number>(true /* multiple */);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    // USERS.forEach((user) => {
    //   if (
    //     user.addresses &&
    //     Array.isArray(user.addresses) &&
    //     user.addresses.length
    //   ) {
    //     this.usersData = [
    //       ...this.usersData,

    //       {
    //         ...user,
    //         addresses: new MatTableDataSource(user.addresses),
    //       },
    //     ];
    //   } else {
    //     this.usersData = [...this.usersData, user];
    //   }
    // });
    // this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource = new MatTableDataSource(USERS);
    // this.dataSource.sort = this.sort;
  }

  toggleRow(element: User) {
    this.checklistSelection.toggle(element.id);
  }

  public isExpanded(element: User): boolean {
    return this.checklistSelection.isSelected(element.id);
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  addresses?: Address[] | MatTableDataSource<Address>;
}

export interface Address {
  street: string;
  zipCode: string;
  city: string;
}

export interface UserDataSource {
  id: number;
  name: string;
  email: string;
  phone: string;
  addresses?: MatTableDataSource<Address>;
}

const USERS: User[] = [
  {
    id: 1,
    name: 'Mason',
    email: 'mason@test.com',
    phone: '9864785214',
    addresses: [
      {
        street: 'Street 1',
        zipCode: '78542',
        city: 'Kansas',
      },
      {
        street: 'Street 2',
        zipCode: '78554',
        city: 'Texas',
      },
    ],
  },
  {
    id: 2,
    name: 'Eugene',
    email: 'eugene@test.com',
    phone: '8786541234',
  },
  {
    id: 3,
    name: 'Jason',
    email: 'jason@test.com',
    phone: '7856452187',
    addresses: [
      {
        street: 'Street 5',
        zipCode: '23547',
        city: 'Utah',
      },
      {
        street: 'Street 5',
        zipCode: '23547',
        city: 'Ohio',
      },
    ],
  },
];

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
