import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {AgmCoreModule} from '@agm/core';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';

@NgModule({
  declarations: [TeacherDashboardComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    ChartModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ]
})
export class TeacherModule { }
