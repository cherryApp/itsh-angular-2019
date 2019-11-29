import { FieldBase } from './field-base';

export class InputField extends FieldBase<string> {
    // tslint:disable-next-line: no-inferrable-types
    controlType?: string = 'input';
    type: string;

    constructor(options: InputField) {
        super(options);
        this.type = options.type || 'text';
    }
}
