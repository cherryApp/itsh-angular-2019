import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { FilterPipe } from './pipe/filter.pipe';
import { CallButtonDirective } from './directive/call-button.directive';
import { LazyForDirective } from './directive/lazyFor.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmployeeComponent,
    FilterPipe,
    CallButtonDirective,
    LazyForDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
