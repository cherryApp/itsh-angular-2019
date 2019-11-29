import { Component, OnInit, Input } from '@angular/core';
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
  formGroup: FormG;

  constructor(
    private generator: FormGeneratoService
  ) { }

  ngOnInit() {

  }

}
