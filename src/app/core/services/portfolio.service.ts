import { IAtAGlanceMetric } from './../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAtAGlanceMetrics } from 'src/app/shared/interfaces';

@Injectable()
export class PortfolioService {
  private _portfolioUrl = './data/portfolio.json';

  constructor(private _http: HttpClient){
  }

  getTechnologyMetrics(): Observable<IAtAGlanceMetrics>{
    return this._http.get<any>(this._portfolioUrl).pipe(
      map((metricsData: any) =>{
        let metrics: IAtAGlanceMetric[] = [];
        metrics = (metricsData["metrics"] as Array<any>).map(x => {
          return {
            technology: x["technology"],
            iconPath: x["iconPath"],
            totalYears: new Date().getFullYear() - x["yearStarted"]
          }
        })

        return {
          title: "Years of technical experience at a glance",
          metrics: metrics
        }
      })
    );
  }
}
