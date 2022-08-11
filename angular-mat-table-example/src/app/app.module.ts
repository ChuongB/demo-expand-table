import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableExpandableRowsExample } from './mat-table/table-expandable-rows-example.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DragDropTableComponent } from './drag-drop-table/drag-drop-table.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { InnerTableComponent } from './inner-table/inner-table.component';


@NgModule({
  declarations: [AppComponent, TableExpandableRowsExample, DragDropTableComponent, InnerTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
