import { Injectable } from '@angular/core';
import { FieldBase } from '../model/field-base';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratoService {

  constructor() { }

  toFormGroup(fieldList: FieldBase<any>[]): FormGroup {
    const group = {};

    fieldList.forEach( item => {
      group[item.key] = new FormControl(item.value, item.validators || []);
    });

    return new FormGroup(group);
  }
}
