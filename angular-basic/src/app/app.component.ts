import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  isDisabled = true;
  message = 'Hello';

  heroes: Hero[] = [
    new Hero(1),
    new Hero(2),
    new Hero(3),
    new Hero(4),
    new Hero(5),
  ];

  selectedHero: Hero = null;

  constructor() {
    setInterval(() => {
      const num = Math.floor(Math.random() * 100);
      this.title = 'angular-basic' + num;
      this.isDisabled = !this.isDisabled;
    }, 1000);
  }

  onClicked(ev: MouseEvent): void {
    (ev.target as HTMLButtonElement).innerHTML = this.title;
  }

  onShow(hero: Hero): void {
    this.selectedHero = hero;
  }

  onSave(hero: Hero): void {
    let selected: Hero = this.heroes.find( item => item.id === hero.id);
    console.log(hero, selected);
    selected = hero;
    console.log(hero, selected);
  }

  onDelete(hero: Hero): void {
    const index = this.heroes.indexOf(hero);
    this.heroes.splice(index, 1);
    this.selectedHero = null;
  }
}
