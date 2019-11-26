import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService {

  endpoint = 'employee';

  constructor(
    http: HttpClient
  ) {
    super(http);
  }
}
