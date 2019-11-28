import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { Column } from 'src/app/model/column';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit, OnDestroy {

  cols: Column[] = this.config.cols.employee;

  list: any[] = this.employeeService.list;
  list$: BehaviorSubject<Employee[]> = this.employeeService.list$;
  changeInterval: any;

  phrase = '';
  filterKey = '';

  constructor(
    private employeeService: EmployeeService,
    private changeDetectorRef: ChangeDetectorRef,
    private config: ConfigService
  ) {
    changeDetectorRef.detach();
    this.changeInterval = setInterval(() => {
      this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  ngOnInit() {
    this.employeeService.getAll();
  }

  ngOnDestroy() {
    clearInterval(this.changeInterval);
  }

  trackFn(index, item): number {
    if (!item) {
      return null;
    }
    return item.id;
  }

}
