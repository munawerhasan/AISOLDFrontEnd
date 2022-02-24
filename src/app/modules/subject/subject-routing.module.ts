import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectMappingComponent } from './components/subject-mapping/subject-mapping.component';
import { TeacherMappingComponent } from "./components/teacher-mapping/teacher-mapping.component";

const routes: Routes = [
  {
    path: 'list',
    component: SubjectListComponent,
    data: {
      title: 'Classes',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'mapping',
    component: SubjectMappingComponent,
    data: {
      title: 'Subject Mapping',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'teacher-mapping',
    component: TeacherMappingComponent,
    data: {
      title: 'Subject Teacher Mapping',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
