import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGeneratoService } from '../../service/form-generato.service';
import { FieldBase } from '../../model/field-base';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'isth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() fieldList: FieldBase<any>[];
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  formGroup: FormGroup;

  constructor(
    private generator: FormGeneratoService
  ) { }

  ngOnInit() {
    this.formGroup = this.generator.toFormGroup(this.fieldList);
  }

  onSubmit(): void {
    this.submitted.emit(this.formGroup.value);
  }

}
