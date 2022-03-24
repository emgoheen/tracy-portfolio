import { IAtAGlanceMetric, IAbout, IPortfolio, IProject, IProjectCollection, ITimeline, IMasterPortfolio, initialMasterPortfolioData } from './../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { IAtAGlanceMetrics, initialProjectData } from 'src/app/shared/interfaces';

@Injectable()
export class PortfolioService {
  private _masterPortfolioUrl = './data/masterportfolio.json';
  private _portfolioCollection?: IProjectCollection;

  private _portfolio$: BehaviorSubject<IMasterPortfolio> = new BehaviorSubject<IMasterPortfolio>(initialMasterPortfolioData);

  constructor(private _http: HttpClient){
    // This is the way you'd test a slow service call:
    // this._http.get<IMasterPortfolio>(this._masterPortfolioUrl)
    // .subscribe(portfolio => {
    //   setTimeout(() => {
    //     console.log("Now we're going to call the BehaviorSubject");
    //     this._portfolio$.next(portfolio)
    //   }, 3000);
    // });

      this.getMasterPortfolio()
      .subscribe(portfolio => {
          this._portfolio$.next(portfolio);
      });
  }

  getProject(id: string): Observable<IProject> {
    // By the time this is called, this._portfolioCollection should always
    // have data in it because that data is set on initialization of this service
    // and this service has to be initialized before it is injected into the
    // components.
    // If I run into problems with this approach later and an individual project
    // isn't loading correctly, I may revisit this and call getMasterPortfolio
    // first if _portfolioCollection is null/undefined.
    if(this._portfolioCollection == null) return of(initialProjectData);
    else{
      return of(this._portfolioCollection.projectCollection[id]);
    }
  }

  getMasterPortfolio(): Observable<IMasterPortfolio> {
    return this._http.get<IMasterPortfolio>(this._masterPortfolioUrl).pipe(
      map((portfolioData: any) => {
        let projs: IProject[] = [];
        projs = (portfolioData["portfolio"]["projects"] as Array<any>).map(x => {
          return {
            slideInfo: portfolioData["portfolio"]["slideInfo"],
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
        });
        let metrics: IAtAGlanceMetric[] = [];
        metrics = (portfolioData["metrics"] as Array<any>).map(x => {
          return {
            technology: x["technology"],
            iconPath: x["iconPath"],
            totalYears: new Date().getFullYear() - x["yearStarted"]
          }
        })

        this._portfolioCollection = {
          projectCollection: Object.assign({}, ...projs.map((x) => ({[x.id]: x})))
        }

        return {
          metrics: {
            title: "Years of technical experience at a glance",
            metrics: metrics
          },
          about: portfolioData["about"],
          portfolio: {
            slideInfo: portfolioData["portfolio"]["slideInfo"],
            projects: projs
          },
          timeline: portfolioData["timeline"]
        };
      }),
      share()
    );
  }

  getMasterPortfolioObs(): Observable<IMasterPortfolio> {
    return this._portfolio$.asObservable();
  }
}
