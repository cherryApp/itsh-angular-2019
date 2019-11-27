import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

  cols: {key: string, title: string}[] = [
      {key: 'id', title: 'ID'},
      {key: 'first_name', title: 'Fname'},
      {key: 'last_name', title: 'Lname'},
      {key: 'email', title: 'Email'},
      {key: 'gender', title: 'Gender'},
      {key: 'ip_address', title: 'IP'},
      {key: 'address', title: 'Address'},
      {key: 'phone', title: 'Phone'},
  ];

  list: any[] = this.employeeService.list;
  list$: BehaviorSubject<any> = this.employeeService.list$;

  phrase = '';
  filterKey = '';

  constructor(
    private employeeService: EmployeeService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    changeDetectorRef.detach();
    setInterval(() => {
      this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  ngOnInit() {
    this.employeeService.getAll();
  }

}
