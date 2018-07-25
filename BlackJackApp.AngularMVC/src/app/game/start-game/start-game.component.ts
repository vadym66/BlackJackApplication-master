import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { GameService } from '../../shared/services/game.service';
import { UserView } from '../../shared/models/game/user.view';
import { StartGameView } from '../../shared/models/game/start-game.view';

@Component({
    selector: 'start-game',
    templateUrl: './start-game.component.html',
    providers: [GameService],
    styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {

    botItems: number[] = [0, 1, 2, 3, 4, 5];
    users: string[] = [];
    startModel: StartGameView = new StartGameView();
    emptyItem: boolean;

    constructor(private startGameService: GameService, private router: Router) {
    }

    ngOnInit() {
        this.emptyItem = true;
        this.startGameService.getPlayers()
            .subscribe(data => {
                for (var i = 0; i < data.users.length; i++) {
                    this.users[i] = data.users[i].name;
                }
            })
    }
    onButtonClick() {
        this.startGameService.createGame(this.startModel).subscribe(result => {
            this.router.navigate(['/game', result]);
        })
    }
    
    onValueChange(value) {

        if (value == null) {
            this.emptyItem = true;
        }
        else {
            this.emptyItem = false;
        }
    }
}
