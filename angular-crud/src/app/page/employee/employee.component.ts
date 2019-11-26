import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
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

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
  }

}
