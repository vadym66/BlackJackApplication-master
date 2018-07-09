import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Operator } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './User';


@Injectable()
export class StartGameService {
    playersUrl = 'http://localhost:54796/api/Game/GetPlayers';  // URL to web api
   
    constructor(private http: HttpClient) {

    }

    getPlayers(): Observable<User[]> {
        return this.http.get<User[]>(this.playersUrl);            
    }
}