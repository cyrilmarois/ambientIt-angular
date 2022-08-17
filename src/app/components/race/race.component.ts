import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Poney } from '../../interfaces/poney';
import { Race } from '../../interfaces/race';

import { RaceService } from '../../services/race.service';

import { FilterPoneyPipe } from '../../pipes/filter-poney.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  toto: Race;
  poney$: Observable<Poney[]>;
  isFinish: boolean;
  winner: Poney[];

  constructor(
    private _filterPoney: FilterPoneyPipe,
    private _raceService: RaceService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isFinish = false;
    this.winner = [];
    this.poney$ = this._raceService.ponies;
    this._route.params.subscribe((params) => {
      this._raceService.getRaceById(params.id).subscribe(race => {
        this.toto = race;
        console.log(this.toto);
        });
    });
    console.log('onInit', this.isFinish, this.toto);
  }

  handleWin(poney: Poney) {
    console.log('isFinish : ' , poney.name, this.winner);
    this.isFinish = true;
    this.winner.push(poney);
  }

  listPoney() {
    console.log(this.poney$, this.toto.poneyId);
    //console.log(this._filterPoney.transform(this.poney, this.toto.poneyId));
  }
}
