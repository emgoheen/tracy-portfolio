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

export interface IExperience{
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
  slideTitle: string,
  slidePath: string,
  slideDescription: string,
  name: string,
  overview: string
  socialInfo: ISocialInfo[];
}

export interface ISocialInfo{
  icon: string;
  url: string;
}

export interface IPortfolio{
  slideTitle: string,
  slidePath: string,
  slideDescription: string,
  projects: Array<IProject>;
}

export interface IProject{
  title: string,
  imagePath: string,
  routerLink: string,
  technologies: string;
  alignment: string;
}

