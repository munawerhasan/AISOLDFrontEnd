import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MasterdocumentRoutingModule } from './masterdocument-routing.module';
import { MasterdocumentAddComponent } from './components/masterdocument-add/masterdocument-add.component';
import { MasterdocumentUpdateComponent } from './components/masterdocument-update/masterdocument-update.component';
import { MasterdocumentListComponent } from './components/masterdocument-list/masterdocument-list.component';

@NgModule({
  declarations: [MasterdocumentAddComponent, MasterdocumentUpdateComponent, MasterdocumentListComponent],
  imports: [
    CommonModule,
    MasterdocumentRoutingModule,
    CommonModule,       
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterdocumentModule { }
