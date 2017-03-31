import { Component, OnInit } from '@angular/core';

import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ],
  providers: [ HeroService ]
})
export class AppComponent implements OnInit {
  
  title = 'Tour of Heroes';

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private service: HeroService) {}

  ngOnInit(): void {
    this.service.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}