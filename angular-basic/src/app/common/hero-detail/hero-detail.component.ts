import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  currentHero: Hero;
  @Input() set hero(hero: Hero) {
    this.currentHero = new Hero();
    this.currentHero.copy(hero);
  }
  @Output() deleteHero: EventEmitter<Hero> = new EventEmitter<Hero>();
  @Output() saveHero: EventEmitter<Hero> = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  onSaveHero(hero: Hero) {
    this.saveHero.emit(hero);
  }

  onDelete(hero: Hero) {
    this.deleteHero.emit(hero);
  }

}
