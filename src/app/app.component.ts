import { Component } from '@angular/core';

import { PeopleService } from './people.service'
import { SenateFetchService } from './senate-fetch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ussenate7';
  // people$
  // constructor(private peopleService: PeopleService){}

  // fetchPeople() {
  //   this.people$ = this.peopleService.fetchPeople()
  // }

  senator$
  constructor(private SenateFetchService: SenateFetchService){}

  fetchSenate() {
    this.senator$ = this.SenateFetchService.fetchSenate()
  }

}
