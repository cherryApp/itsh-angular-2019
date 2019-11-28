import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { ConfigService } from 'src/app/service/config.service';
import { Column } from 'src/app/model/column';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit, OnDestroy {

  employee: Employee = null;
  sub: Subscription;
  cols: Column[] = this.config.cols.employee;
  isNew = false;

  constructor(
    private employeeService: EmployeeService,
    private ar: ActivatedRoute,
    private config: ConfigService,
  ) { }

  ngOnInit() {
    this.sub = this.ar.params.pipe( switchMap(
      params => {
        if (params.id) {
          return this.employeeService.get(params.id);
        }
        this.isNew = true;
        return of(new Employee());
      }
    ))
    .subscribe(
      data => this.employee = data
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(form): void {
    if (!this.isNew) {
      
    } else {
      this.employeeService.create(this.employee);
    }
  }

}
