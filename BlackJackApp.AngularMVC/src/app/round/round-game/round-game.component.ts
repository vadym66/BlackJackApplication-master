import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { RoundGameView } from '../../shared/models/game/round-game.view';
import { GameService } from '../../shared/services/game.service';
import { PlayerStatusEnumView } from '../../shared/models/enums/player-status-enum.view';

@Component({
    selector: 'round-game',
    providers: [ GameService],
    templateUrl: './round-game.component.html',
    styleUrls: ['./round-game.component.css']
})
  
export class RoundGameComponent implements OnInit  {

    gameId: number;
    roundView: RoundGameView;
    complete: boolean;

    constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {} 

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            let id = params['id'];
            this.gameId = id;
        });
        this.gameService.getRounds(this.gameId).subscribe(result => {
            this.roundView = result;
            this.complete = this.roundView.isResultComplete;
            console.log(PlayerStatusEnumView[3]);
        });
    }

    onTakeButtonClick() {
        this.gameService.getNextRound(this.gameId).subscribe(result => {
            this.roundView = result;
            this.complete = this.roundView.isResultComplete;
        });
    }

    onEnoughButtonClick() {
        this.gameService.getNextRoundForDealer(this.gameId).subscribe(result => {
            this.roundView = result;
            this.complete = this.roundView.isResultComplete;
        });
    }

    onFinishButtonClick() {
        this.router.navigate(['/start']);
    }

    onHistoryButtonClick() {
        this.router.navigate(['/history']);
    }

    getStatus(item: PlayerStatusEnumView): string {
        return PlayerStatusEnumView[item];
    }
}
