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
  public syllabi: any[];
  public videos: any[];
  public linkWidth: number = 212;

  public isPhone: boolean;
  
  title = 'Make FOIA Work';

  constructor(private _dataSvc: DataService, private _sanitizer: DomSanitizer) {
  
   if(ismobile.phone)
    this.linkWidth = 162;

   this.isPhone = ismobile.phone;

  }

  ngOnInit() {
  
    this._dataSvc.getDataForUrl('data/get/').subscribe(response => {
        
      this.about = response.about;
      this.articles = response.articles;
      this.guides = _.where(response.guides, {isSyllabus: false});
      this.syllabi = _.where(response.guides, {isSyllabus: true});
      
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
