import { Component, OnInit } from '@angular/core';
import { DataService } from './utils/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public articles: any[];
  title = 'Make FOIA Work';

  constructor(private _dataSvc: DataService) {}

  ngOnInit() {
  
    this._dataSvc.getDataForUrl('data/get/').subscribe(response => {
        
      this.articles = response.articles;
      console.log(this.articles)

    });

  }
}
