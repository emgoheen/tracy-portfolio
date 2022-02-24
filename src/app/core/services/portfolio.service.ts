import { IAtAGlanceMetric, IAbout, IPortfolio, IProject, IProjectCollection, ITimeline, IExperience, IWorkExperience } from './../../shared/interfaces';
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
  private _timelineUrl = './data/timeline.json';
  private _portfolioCollection?: IProjectCollection;


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

  getProjectOverview(): Observable<IPortfolio> {
    return this._http.get<any>(this._portfolioUrl).pipe(
      map((portfolioData: any) => {
        let projs: IProject[] = [];
        projs = (portfolioData["projects"] as Array<any>).map(x => {
          return {
            slideTitle: portfolioData["slideTitle"],
            slidePath: portfolioData["slidePath"],
            slideDescription: portfolioData["slideDescription"],
            title: x["title"],
            id: x["id"],
            imagePath: x["imagePath"],
            routerLink: `/portfolio/${x["id"]}`,
            overviewTechList: x["overviewTechList"],
            alignment: x["alignment"],
            source: x["source"],
            description: x["description"],
            fullTechList: x["fullTechList"]
          }
        })

        // The collection used for single page project display
        this._portfolioCollection = {
          projectCollection: Object.assign({}, ...projs.map((x) => ({[x.id]: x})))
        }

        return {
          slideTitle: portfolioData["slideTitle"],
          slidePath: portfolioData["slidePath"],
          slideDescription: portfolioData["slideDescription"],
          projects: projs
        }
      }),
      share()
    );
  }

  getProject(id: string): Observable<IProject | undefined> {
    return this.getProjectOverview().pipe(
      map(() => {
        return this._portfolioCollection?.projectCollection[id];
      })
    )
  }

  getTimeline(): Observable<ITimeline>{
    return this._http.get<any>(this._timelineUrl).pipe(
      map((experienceData: any) =>{
        let experience: IWorkExperience[] = [];
        experience = (experienceData["experience"] as Array<any>).map(x => {
          return {
            title: x["title"],
            company: x["company"],
            range: x["range"],
            duties: x["duties"]
          }
        })

        return {
          slideTitle: experienceData["slideTitle"],
          slidePath: experienceData["slidePath"],
          slideDescription: experienceData["slideDescription"],
          quote: experienceData["quote"],
          college: experienceData["college"],
          degree: experienceData["degree"],
          collegeRange: experienceData["collegeRange"],
          experienceList: experience
        }
      }),
      share()
    );
  }
}
