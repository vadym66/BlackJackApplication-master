import { Component, OnInit } from '@angular/core';
import { ShowGamesHistoryView } from '../../shared/models/history/show-games-history.view';
import { HistoryService } from '../../shared/services/history.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'history-game-list',
    templateUrl: './history-grid.component.html',
    styleUrls: ['./history-grid.component.css'],
    providers: [HistoryService],
})

export class HistoryGridComponent implements OnInit {

    data: ShowGamesHistoryView;

    constructor(private historyService: HistoryService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.historyService.getGames().subscribe(result => {
            this.data = result;
            console.log(this.data);
        })
    }

    onButtonClick(id: number) {
        this.router.navigate(['details', id], { relativeTo: this.route });
    }
}