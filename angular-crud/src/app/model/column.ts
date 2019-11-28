export class Column {
    key = '';
    title = '';
    type?: 'text'|'date'|'number'|'email' = 'text';
    noEditable?: boolean;
}
