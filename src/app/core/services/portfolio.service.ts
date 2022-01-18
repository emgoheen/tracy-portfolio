import { IAtAGlanceMetric, IAbout, IPortfolio, IProject } from './../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { IAtAGlanceMetrics } from 'src/app/shared/interfaces';

@Injectable()
export class PortfolioService {
  private _experienceUrl = './data/experience.json';
  private _aboutUrl = './data/about.json';
  private _portfolioUrl = './data/portfolio.json';

  constructor(private _http: HttpClient){
  }

  getTechnologyMetrics(): Observable<IAtAGlanceMetrics>{
    return this._http.get<any>(this._experienceUrl).pipe(
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
      }),
      share()
    );
  }

  getAboutInfo(): Observable<IAbout>{
    return this._http.get<IAbout>(this._aboutUrl).pipe(
      share()
    );
  }

  getPortfolioInfo(): Observable<IPortfolio>{
    return this._http.get<any>(this._portfolioUrl).pipe(
      map((portfolioData: any) => {
        let projs: IProject[] = [];
        projs = (portfolioData["projects"] as Array<any>).map(x => {
          return {
            title: x["title"],
            imagePath: x["imagePath"],
            routerLink: `/portfolio/ + ${x["id"]}`,
            technologies: x["technologies"],
            alignment: x["alignment"]
          }
        })

        return {
          projects: projs
        }
      }),
      share()
    );
  }
}
