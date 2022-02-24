import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BroadcastComponent } from './broadcast/broadcast.component';

const routes: Routes = [
  {
    path: 'broadcast',
    component: BroadcastComponent,
    data: {
      title: 'Broadcasting',
      icon: 'icon-layout-sidebar-left',
      caption: 'Broadcasting Videos here! Please keep your Microphone and Camera up',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineclassRoutingModule { }
