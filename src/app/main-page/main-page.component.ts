import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  news = [];

  scrollToContent = function () {
    document.getElementById('share-menu').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  };

  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.newService.getNews().subscribe((news: any[]) => {
        this.news = news;
    });
  }
}
