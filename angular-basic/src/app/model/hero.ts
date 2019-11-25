export class Hero {
    id = 0;
    name = '';
    superPower: 'flying'|'walking'|'telephaty' = 'flying';
    address = 'New York';

    constructor(id: number = 0) {
        this.id = id;
    }

    copy(hero: Hero): Hero {
        for (const k in hero) {
            if (this[k]) {
                this[k] = hero[k];
            }
        }
        this.id = hero.id;
        return this;
    }
}
