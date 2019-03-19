import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './utils/data.service';

import * as ismobile from 'ismobilejs';
import * as _ from 'underscore';
import * as embed from 'embed-video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  
  public about: any;
  public articles: any[];
  public guides: any[];
  public videos: any[];
  public linkWidth: number = 212;
  
  title = 'Make FOIA Work';

  constructor(private _dataSvc: DataService, private _sanitizer: DomSanitizer) {
  

   if(ismobile.phone)
    this.linkWidth = 162;

  }

  ngOnInit() {
  
    this._dataSvc.getDataForUrl('data/get/').subscribe(response => {
        
      this.about = response.about;
      this.articles = response.articles;
      this.guides = response.guides;
      
      _.each(response.videos, (video: any) => {
        video.frame = this._sanitizer.bypassSecurityTrustHtml(embed.vimeo(video.videoId));
      })
      this.videos = response.videos;


    });

  }

  openCloseAbout() {

    document.getElementById('about').classList.toggle('open');
    // document.getElementById('about').classList.toggle('open');

  }

}
