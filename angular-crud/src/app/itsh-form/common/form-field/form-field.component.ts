import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../../model/field-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() field: FieldBase<any>;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid(): boolean {
    const control = this.formGroup.controls[this.field.key];
    return control.valid || control.pristine;
  }

}
