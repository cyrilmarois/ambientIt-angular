import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Poney } from '../../../interfaces/poney';
import { createLViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'amb-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input() poney: Poney;
  @Output() win: EventEmitter<Poney> = new EventEmitter();
  intervalId: any;

  constructor() { }

  ngOnInit() {
    this.win.subscribe(() => {
      console.log('WIN');
    });
    this.run();
  }

  handleClick() {
    this.win.emit(this.poney);
  }

  run() {
    this.poney.distance = 0;

    this.intervalId = setInterval(() => {
      this.poney.distance += Math.floor(Math.random() * 10) + 1;

      if (this.poney.distance >= 85) {
        this.win.emit(this.poney);
        this.poney.distance = 85;
        this.stopRunning();
      }
    }, 1000);
  }

  stopRunning() {
    clearInterval(this.intervalId);
  }

}
