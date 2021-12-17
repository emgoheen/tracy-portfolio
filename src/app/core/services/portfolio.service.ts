import { IOverviewSlideDeck } from './../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioService {
  private _portfolioUrl = './data/portfolio.json';

  constructor(private _http: HttpClient) {}

  getHomeSlideDeck(): Observable<IOverviewSlideDeck> {
    return this._http.get<IOverviewSlideDeck>(this._portfolioUrl);
  }
}
