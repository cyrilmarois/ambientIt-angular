import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { RaceService } from './../../services/race.service';

import { Poney } from '../../interfaces/poney';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'amb-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  poney$: Observable<Poney[]>;
  raceForm: FormGroup;

  constructor(
    private _location: Location,
    private _raceService: RaceService
  ) { }

  ngOnInit() {
    this.poney$ = this._raceService.ponies;
    this.raceForm = new FormGroup({
      title: new FormControl('', [Validators.required, this.firstLetter('L')], [this.IsValidName.bind(this)]),
      poneyId: new FormControl([], [Validators.required, Validators.minLength(2)])
    });
    //setTimeout(this.goBack.bind(this), 2000);
  }

  firstLetter(letter: string): ValidatorFn {

    return (control: FormControl) => {
      if (control.value.charAt(0) === letter) {
        return undefined;
      }

      return {
        status: true
      };
    };
  }

  IsValidName(control: FormControl) {
    return this._raceService.races.pipe(
      map(races => {
        return races.find(race => race.title === control.value) ? {status: true} : undefined;
      }
    ));
  }

  goBack() {
    console.log(this._location);
    this._location.back();
  }

  submit() {
    this._raceService.createRace(this.raceForm.value)
    .subscribe(() => {
      this.goBack();
    });
  }
}
