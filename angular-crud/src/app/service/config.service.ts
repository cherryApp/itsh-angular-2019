import { Injectable } from '@angular/core';
import { Column } from '../model/column';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  links: {href: string, title: string}[] = [
    {href: '/', title: 'Home'},
    {href: '/login', title: 'Login'},
  ];

  cols: {[propname: string]: Column[]} = {
    employee: [
      {key: 'id', title: 'ID', noEditable: true, type: 'number'},
      {key: 'first_name', title: 'Fname', required: true},
      {key: 'last_name', title: 'Lname', required: true},
      {key: 'email', title: 'Email', type: 'email', required: true},
      {key: 'gender', title: 'Gender'},
      {key: 'ip_address', title: 'IP'},
      {key: 'address', title: 'Address'},
      {key: 'phone', title: 'Phone'},
    ],
  };

  apiUrl = 'http://localhost:3000/';

  constructor() { }
}
