import { Component } from '@angular/core';
import {NewsService} from './news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [NewsService]
})
export class AppComponent {
  title = 'app';
}
