import { Component, OnInit, Input } from '@angular/core';
import { RoundGameViewModel } from '../../shared/view-models/game/RoundGameViewModel';
import { GameService } from '../../shared/services/game.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'round-game',
    providers: [GameService],
    templateUrl: './round-game.component.html'
})

export class RoundGame implements OnInit {

    gameId: number;
    roundView: RoundGameViewModel;
    complete: boolean;

    constructor(private startGameService: GameService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        this.gameId = parseInt(id);
        console.log(this.gameId);
        this.startGameService.getRounds(this.gameId).subscribe(result => {
            this.roundView = result;
            this.complete = this.roundView.isResultComplete;
        });
    }

    onTakeButtonClick() {
        this.startGameService.getNextRound(this.gameId).subscribe(result => {
            this.roundView = result;
            this.complete = this.roundView.isResultComplete;
        });
    }

    onEnoughButtonClick() {
        this.startGameService.getNextRoundForDealer(this.gameId).subscribe(result => {
            this.roundView = result;
            this.complete = this.roundView.isResultComplete;
        });
    }

    onFinishButtonClick() {
        this.startGameService.getNextRound(this.gameId).subscribe(result => {
            this.roundView = result;
            this.complete = this.roundView.isResultComplete;
        });
    }

    onHistoryButtonClick() {
        this.startGameService.getNextRound(this.gameId).subscribe(result => {
            this.roundView = result;
            this.complete = this.roundView.isResultComplete;
        });
    }
}
