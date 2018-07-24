import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserViewModel } from '../view-models/game/UserViewModel';
import { StartGameViewModel } from '../view-models/game/StartGameViewModel';

@Injectable()

export class GameService {

    constructor(private http: HttpClient) {

    }

    getPlayers(): Observable<UserViewModel[]> {
        return this.http.get<UserViewModel[]>('http://localhost:54796/game/getPlayers');
    }

    //createGame(viewModel: StartGameViewModel): Observable<RoundGameViewModel> {
    //    return this.http.post<RoundGameViewModel>(this.getCurrentGameUrl, viewModel, undefined);
    //}

    createGame(startModel: StartGameViewModel): Observable<number> {
        return this.http.post<number>("http://localhost:54796/game/create", startModel);
    }

    getRounds(id: number): Observable<any> {
        return this.http.get<any>("http://localhost:54796/game/getRounds/" + id);
    }

    getNextRound(id: number): Observable<any> {
        return this.http.get<any>("http://localhost:54796/game/getNextRound/" + id);
    }

    getNextRoundForDealer(id: number): Observable<any> {
        return this.http.get<any>("http://localhost:54796/game/getRoundForDealer/" + id);
    }
}
