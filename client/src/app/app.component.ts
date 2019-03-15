import { Component, OnInit } from '@angular/core';
import { DataService } from './utils/data.service';

import * as ismobile from 'ismobilejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public about: any[];
  public articles: any[];
  public guides: any[];
  public linkWidth: number = 212;
  
  title = 'Make FOIA Work';

  constructor(private _dataSvc: DataService) {

   if(ismobile.phone)
    this.linkWidth = 162;

  }

  ngOnInit() {
  
    this._dataSvc.getDataForUrl('data/get/').subscribe(response => {
        
      this.about = response.about;
      this.articles = response.articles;
      this.guides = response.guides;

    });

  }
}
