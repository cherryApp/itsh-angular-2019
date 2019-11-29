import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ItshFormModule } from './itsh-form/itsh-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { FilterPipe } from './pipe/filter.pipe';
import { CallButtonDirective } from './directive/call-button.directive';
import { LazyForDirective } from './directive/lazyFor.directive';
import { LoginComponent } from './page/login/login.component';
import { EmployeeEditComponent } from './page/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmployeeComponent,
    FilterPipe,
    CallButtonDirective,
    LazyForDirective,
    LoginComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ItshFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
