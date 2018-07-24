import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HistoryService } from '../../shared/services/history.service';
import { DetailHistoryView } from '../../shared/models/history/detail-history.view';


@Component({
    selector: 'app-history-details',
    templateUrl: './history-details.component.html',
    providers: [HistoryService],
    styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit {
    gameId: number;
    gameDetailsModel: DetailHistoryView;
    constructor(private historyService: HistoryService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            let id = params['id'];
            this.gameId = id;
        });

        this.historyService.getDetails(this.gameId).subscribe(result => {
            this.gameDetailsModel = result;
        });
    }

    onButtonClick() {
        this.router.navigate(['/history']);
    }
}
