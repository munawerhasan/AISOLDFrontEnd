import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToggleFullScreenDirective} from './fullscreen/toggle-fullscreen.directive';
import {AccordionAnchorDirective} from './accordion/accordionanchor.directive';
import {AccordionLinkDirective} from './accordion/accordionlink.directive';
import {AccordionDirective} from './accordion/accordion.directive';
import { RemoveAlertDirective } from './directive/RemoveAlertDirective';
import {HttpClientModule} from '@angular/common/http';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {TitleComponent} from '../layout/admin/title/title.component';
import {CardComponent} from './card/card.component';
import {CardToggleDirective} from './card/card-toggle.directive';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {DataFilterPipe} from './elements/data-filter.pipe';
import { StatusConversionPipe } from './pipes/status-conversion.pipe';
import { GenderConversionPipe } from './pipes/gender-conversion.pipe';
import { AssignmentStatusPipe } from "./pipes/assignment-status.pipe";
import { ShortenTextPipe } from "./pipes/shoten-text.pipe";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule
  ],
  exports: [
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    RemoveAlertDirective,
    AccordionDirective,
    CardToggleDirective,
    HttpClientModule,
    PerfectScrollbarModule,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule,
    DataFilterPipe,
    StatusConversionPipe,
    GenderConversionPipe,
    AssignmentStatusPipe,
    ShortenTextPipe
  ],
  declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    RemoveAlertDirective,
    AccordionDirective,
    CardToggleDirective,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    DataFilterPipe,
    StatusConversionPipe,
    GenderConversionPipe,
    AssignmentStatusPipe,
    ShortenTextPipe
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
