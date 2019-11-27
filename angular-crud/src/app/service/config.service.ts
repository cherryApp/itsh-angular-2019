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
      {key: 'id', title: 'ID'},
      {key: 'first_name', title: 'Fname'},
      {key: 'last_name', title: 'Lname'},
      {key: 'email', title: 'Email'},
      {key: 'gender', title: 'Gender'},
      {key: 'ip_address', title: 'IP'},
      {key: 'address', title: 'Address'},
      {key: 'phone', title: 'Phone'},
    ],
  };

  apiUrl = 'http://localhost:3000/';

  constructor() { }
}
