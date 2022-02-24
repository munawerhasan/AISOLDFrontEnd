import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './modules/account/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { ComingSoonComponent } from './layout/maintenance/coming-soon/coming-soon.component';
import { Error400Component } from './layout/maintenance/error/error-400/error-400.component';
import { Error403Component } from './layout/maintenance/error/error-403/error-403.component';
import { Error404Component } from './layout/maintenance/error/error-404/error-404.component';
import { Error500Component } from './layout/maintenance/error/error-500/error-500.component';
import { Error503Component } from './layout/maintenance/error/error-503/error-503.component';
import { OfflineUiComponent } from './layout/maintenance/offline-ui/offline-ui.component';
import { NgxSpinnerModule } from 'ngx-spinner';
//import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    LoginComponent,
    DashboardComponent,
    ComingSoonComponent,
    Error400Component,
    Error403Component,
    Error404Component,
    Error500Component,
    Error503Component,
    OfflineUiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    NgxSpinnerModule,
    // BsDatepickerModule.forRoot(),
    // DatepickerModule.forRoot() 
  ],
  providers: [
    MenuItems,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
