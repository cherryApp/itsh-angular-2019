import { Component, OnInit } from '@angular/core';
import { FieldBase } from 'src/app/itsh-form/model/field-base';
import { InputField } from 'src/app/itsh-form/model/input-field';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fields: FieldBase<any>[] = [
    new InputField({key: 'email', label: 'Eamil', type: 'email', value: '',
      validators: [Validators.email, Validators.required], errorMessage: 'Invalid email address'}),
    new InputField({key: 'password', label: 'Password', type: 'password', value: '',
      validators: [Validators.required, Validators.pattern(/^.{8,}$/)], errorMessage: 'Must be minimum 8 characters'})
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data): void {
    console.log(data);
  }

}
