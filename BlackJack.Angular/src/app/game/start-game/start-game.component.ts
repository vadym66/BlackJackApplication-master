import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { StartGameViewModel } from '../../shared/view-models/game/StartGameViewModel';
import { GameService } from '../../shared/services/game.service';

@Component({
    selector: 'start-game',
    templateUrl: './start-game.component.html',
    providers: [GameService],
    styleUrls: ['./start-game.component.css']
})
export class StartGame implements OnInit {
    title = 'here the game is started';
    botItems: number[] = [0, 1, 2, 3, 4, 5];
    users: string[] = [];
    startModel: StartGameViewModel = new StartGameViewModel();
    num: number;


    constructor(private startGameService: GameService, private router: Router) {
    }

    ngOnInit() {
        this.startGameService.getPlayers()
            .subscribe(data => {
                for (var i = 0; i < data.length; i++) {
                    this.users[i] = data[i].name;
                    console.log(this.users[i]);
                }
            })
    }
    onButtonClick() {
        this.startGameService.createGame(this.startModel).subscribe(result => {
            console.log(result);
            this.router.navigate(['/round', result]);
        })
    }
}