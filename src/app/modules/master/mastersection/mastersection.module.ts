import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MastersectionRoutingModule } from './mastersection-routing.module';
import { MastersectionAddComponent } from './components/mastersection-add/mastersection-add.component';
import { MastersectionUpdateComponent } from './components/mastersection-update/mastersection-update.component';
import { MastersectionListComponent } from './components/mastersection-list/mastersection-list.component';

@NgModule({
  declarations: [MastersectionAddComponent, MastersectionUpdateComponent, MastersectionListComponent],
  imports: [
    CommonModule,
    MastersectionRoutingModule,
    CommonModule,       
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MastersectionModule { }
