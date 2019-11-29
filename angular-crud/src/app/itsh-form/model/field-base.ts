import { ValidatorFn } from '@angular/forms';

export abstract class FieldBase<T> {
    value: T;
    key: string;
    label: string;
    validators?: ValidatorFn[];
    controlType: string;
    errorMessage?: string;

    constructor(options: FieldBase<T>) {

    }
}
