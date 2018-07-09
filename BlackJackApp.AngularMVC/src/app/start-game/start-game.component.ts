import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { StartGameService } from './start-game.service'
import { User } from './User';
import { StartGameView } from './StartGameView'
 
interface UserResponse {
    name: string;
}

@Component({
    selector: 'start-game',
    templateUrl: './start-game.component.html',
    providers: [StartGameService],
    styleUrls: ['./start-game.component.css']
})
export class StartGame implements OnInit {
    title = 'here the game is started';
    botItems: number[] = [0, 1, 2, 3, 4, 5];
    selectedValue: string;
    model: StartGameView = new StartGameView();
    users: User[];

    constructor(private startGameService: StartGameService) {
    }

    ngOnInit() {
        this.startGameService.getPlayers()
            .subscribe(data => {
                this.users = data;
            })
    }

    onButtonClick() {
        this.title = 'OOOpppss';
        console.log(this.users);
    }
} 
   
//    constructor(private gameService: GameService) {

//    }

//    ngOnInit() {
//        this.gameService.getUsers().sunscribe(result => {
//            this.model.users = result;
//        })
//    }

//    onButtonClick() {
//        this.title = 'Hello from Kendo UI!';

//        this.gameService.createGame(this.model).subscribe(result => {
//            this.router.navigate();
//        })
//    }
//}

//export class StartGameView {
//    userName: string;
//    botsQuantity: number;
//}

//export class GameService{

//}
