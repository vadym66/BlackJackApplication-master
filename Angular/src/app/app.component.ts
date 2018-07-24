import { Component, Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpClient]
})

@Injectable()
export class AppComponent {
    title = 'app';
    num: number;
    
    constructor(private http: HttpClient) { }

    onButtonClick() {
        
        this.testPost(this.num).subscribe(result => {
            console.log(result);
        });
    }

    testPost(num: number): Observable<string> {
        num = 4;
        
        return this.http.post<string>("http://localhost:54796/api/Game/TestApi", num);
    }
}

