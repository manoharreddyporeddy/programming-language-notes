import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor() { }

  // "service-in-service" scenario
  constructor(private messageService: MessageService) { }

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }*/

  /*
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }*/

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
