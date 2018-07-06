import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGame implements OnInit {
    title = 'here the game is started';
    listItems: number[] = [0, 1, 2, 3, 4, 5];
    model: StartGameView = new StartGameView();
    constructor(private gameService: GameService) {

    }

    ngOnInit() {
        this.gameService.getUsers().sunscribe(result => {
            this.model.users = result;
        })
    }

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';

        this.gameService.createGame(this.model).subscribe(result => {
            this.router.navigate();
        })
    }
}

export class StartGameView {
    userName: string;
    botsQuantity: number;
}

export class GameService{

}
