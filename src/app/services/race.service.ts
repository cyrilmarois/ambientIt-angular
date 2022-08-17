import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private _poney: Poney[] = [];
  private _racess: Race[] = [];

  API_URL: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  get ponies(): Observable<Poney[]> {
    return this._http.get(`${this.API_URL}/poney`)
      .pipe(
        map(poney => <Poney[]>poney)
      );
  }

  get races(): Observable<Race[]> {
    return this._http.get(`${this.API_URL}/races`)
      .pipe(
        map(races => <Race[]>races)
      );
  }

  getRaceById(id: string): Observable<Race> {
    return this.races.pipe(
      map(races => {
        return races.find(
          race => race.id === parseInt(id, 10)
        );
      })
    );
    //return this.races.find(race => race.id == id);
  }

  createRace(race: Race) {
    console.log(race);

    return this._http.post(`${this.API_URL}/races`, race);
  }
}
