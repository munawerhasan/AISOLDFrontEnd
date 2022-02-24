import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
/*import {SimpleNotificationsModule} from 'angular2-notifications';*/
import {AgmCoreModule} from '@agm/core';
import {AppToDoListReadDirective,AppToDoListRemoveDirective} from './owner-dashboard/owner-dashboard.component';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';

@NgModule({
  declarations: [
    OwnerDashboardComponent,
    AppToDoListReadDirective,
    AppToDoListRemoveDirective
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    ChartModule,
    /*SimpleNotificationsModule.forRoot(),*/
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ]
})
export class OwnerModule { }
