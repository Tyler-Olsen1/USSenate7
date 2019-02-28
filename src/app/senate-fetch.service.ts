import { Injectable } from '@angular/core';
import { Observable, pipe, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class SenateFetchService {

  constructor(private http: HttpClient) {}

  fetchSenate(): Observable<Object> {
    return this.http.get('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
  }
  mapDems(): Observable<Object> {
    of this.http.get('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
    return Map(senator.party==='democrat')
    )
  }




}
