import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class NewsService {

  configUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.configUrl);
  }

}
