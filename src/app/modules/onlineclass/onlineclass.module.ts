import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineclassRoutingModule } from './onlineclass-routing.module';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { PublisherComponent } from './publisher/publisher.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { OpentokService } from './opentok.service';

@NgModule({
  declarations: [SubscriberComponent, PublisherComponent, BroadcastComponent],
  imports: [
    CommonModule,
    OnlineclassRoutingModule
  ],
  providers: [OpentokService]
})
export class OnlineclassModule { }
