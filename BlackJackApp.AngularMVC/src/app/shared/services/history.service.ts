import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailHistoryView } from '../models/history/detail-history.view';
import { ShowGamesHistoryView } from '../models/history/show-games-history.view';

@Injectable()

export class HistoryService {

    url = 'http://localhost:54796/history/';

    constructor(private http: HttpClient) { }

    getGames(): Observable<ShowGamesHistoryView> {
        return this.http.get<ShowGamesHistoryView>(this.url + 'get');
    }

    getDetails(id: number): Observable<DetailHistoryView> {
        return this.http.get<DetailHistoryView>(this.url + 'details/' + id);
    }
}