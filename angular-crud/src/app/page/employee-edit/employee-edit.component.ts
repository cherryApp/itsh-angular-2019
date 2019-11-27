import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit, OnDestroy {

  employee: any = null;
  sub: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private ar: ActivatedRoute,
  ) {  }

  ngOnInit() {
    this.sub = this.ar.params.pipe( switchMap(
      params => this.employeeService.get(params.id)
    ))
    .subscribe(
      data => this.employee = data
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
