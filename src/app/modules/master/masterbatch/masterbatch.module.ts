import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MasterbatchRoutingModule } from './masterbatch-routing.module';
import { MasterbatchListComponent } from './components/masterbatch-list/masterbatch-list.component';
import { MasterbatchAddComponent } from './components/masterbatch-add/masterbatch-add.component';
import { MasterbatchUpdateComponent } from './components/masterbatch-update/masterbatch-update.component';

@NgModule({
  declarations: [
    MasterbatchListComponent, 
    MasterbatchAddComponent, 
    MasterbatchUpdateComponent
  ],
  imports: [
    CommonModule,
    MasterbatchRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterbatchModule { }
