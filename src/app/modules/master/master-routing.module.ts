import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master Data',
      status: false
    },
    children: [
      {
        path: 'masterbatch',
        loadChildren: './masterbatch/masterbatch.module#MasterbatchModule'
      },
      {
        path: 'masterclass',
        loadChildren: './masterclass/masterclass.module#MasterclassModule'
      },
      {
        path: 'masterdepartment',
        loadChildren: './masterdepartment/masterdepartment.module#MasterdepartmentModule'
      },
      {
        path: 'masterdocument',
        loadChildren: './masterdocument/masterdocument.module#MasterdocumentModule'
      },
      {
        path: 'masteremployee',
        loadChildren: './masteremployee/masteremployee.module#MasteremployeeModule'
      },
      {
        path: 'masterleave',
        loadChildren: './masterleave/masterleave.module#MasterleaveModule'
      },
      {
        path: 'masteroccupation',
        loadChildren: './masteroccupation/masteroccupation.module#MasteroccupationModule'
      },
      {
        path: 'mastersection',
        loadChildren: './mastersection/mastersection.module#MastersectionModule'
      },
      {
        path: 'mastersubject',
        loadChildren: './mastersubject/mastersubject.module#MastersubjectModule'
      },
      {
        path: 'masterwing',
        loadChildren: './masterwing/masterwing.module#MasterwingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
