﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StartGameView } from '../../shared/models/game/start-game.view';
import { UserView } from '../../shared/models/game/user.view';
import { RoundGameView } from '../models/game/round-game.view';

@Injectable()

export class GameService {

    private _url = 'http://localhost:54796/game/';

    constructor(private http: HttpClient) { }

    getPlayers(): Observable<UserView> {
        return this.http.get<UserView>(this._url + 'getPlayers');
    }

    createGame(startModel: StartGameView): Observable<number> {
        return this.http.post<number>(this._url + 'create', startModel);
    }

    getRounds(id: number): Observable<RoundGameView> {
        return this.http.get<RoundGameView>(this._url + 'getRounds/' + id);
    }

    getNextRound(id: number): Observable<RoundGameView> {
        return this.http.get<RoundGameView>(this._url + 'getNextRound/' + id);
    }

    getNextRoundForDealer(id: number): Observable<RoundGameView> {
        return this.http.get<RoundGameView>(this._url + 'getRoundForDealer/' + id);
    }
}
