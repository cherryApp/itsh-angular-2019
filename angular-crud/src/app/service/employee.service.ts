import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService {

  endpoint = 'employee';

  constructor(
    http: HttpClient,
    config: ConfigService
  ) {
    super(http, config);
  }
}
