export class Hero {
    id = 0;
    name = '';
    superPower: 'flying'|'walking'|'telephaty' = 'flying';
    address = 'New York';

    constructor(id: number = 0) {
        this.id = id;
    }
}
