import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IAtAGlanceMetrics } from 'src/app/shared/interfaces';

@Injectable()
export class PortfolioService {
  private _portfolioUrl = './data/portfolio.json';

  constructor(private _http: HttpClient){
  }

  getTechnologyMetrics(): Observable<IAtAGlanceMetrics>{
    return this._http.get<IAtAGlanceMetrics>(this._portfolioUrl);
  }
}
