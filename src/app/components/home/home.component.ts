import { Component, OnInit } from '@angular/core';

import { Race } from '../../interfaces/race';

import { RaceService } from '../../services/race.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'amb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  racess$: Observable<Race[]>;

  constructor(private _raceService: RaceService) { }

  ngOnInit() {
    // this._raceService.races.subscribe(races => {
    //   this.racess = races;
    // });
    this.racess$ = this._raceService.races;
  }

}
