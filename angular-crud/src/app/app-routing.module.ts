import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './page/employee/employee.component';
import { EmployeeEditComponent } from './page/employee-edit/employee-edit.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: 'employee/create',
    component: EmployeeEditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
