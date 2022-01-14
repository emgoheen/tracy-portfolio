import { Observable } from "rxjs";

export interface IOverviewSlide{
  title: string;
  description: string;
  slidePath: string;
  placement: string;
  hasAdditionalInfo: boolean;
  additionalInfo: string;
  routerLink: string;
}

export interface IPortfolio{
  atAGlanceMetrics: Observable<IAtAGlanceMetrics>,
  about: Observable<IAbout>
}

export interface IAtAGlanceMetrics{
  title: string;
  metrics: IAtAGlanceMetric[];
}

export interface IAtAGlanceMetric{
  technology: string;
  iconPath: string;
  totalYears: number;
}

export interface IAbout{
  name: string,
  overview: string
  socialInfo: ISocialInfo[];
}

export interface ISocialInfo{
  icon: string;
  url: string;
}

