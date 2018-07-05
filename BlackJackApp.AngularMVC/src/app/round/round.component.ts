import { Component, OnInit } from '@angular/core';
import { RoundGameViewModel } from '../RoundGameViewModel';
import { PlayerNextRoundViewItem } from '../PlayerNextRoundViewItem';
import { CardGameViewItem } from '../CardGameViewItem';
import { PlayerRole } from '../PlayerRole';
import { PlayerStatus } from '../PlayerStatus';

import { Rounds } from '../mock-rounds'


@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

  rounds = Rounds;
 
  constructor() { }

  ngOnInit() {
  }

}
