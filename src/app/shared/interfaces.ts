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
  slideTitle: string,
  slidePath: string,
  slideDescription: string,
  title: string,
  id: string,
  imagePath: string,
  routerLink: string,
  overviewTechList: string;
  alignment: string;
  source: string;
  description: string;
  fullTechList: Array<string>;
}

export interface IProjectCollection{
  projectCollection: {[key: string]: IProject};
}

export interface ITimeline{
  slideTitle: string,
  slidePath: string,
  slideDescription: string,
  quote: string,
  college: string,
  degree: string,
  collegeRange: string,
  experienceList: Array<IWorkExperience>
}

export interface IWorkExperience{
  title: string,
  company: string,
  range: string,
  duties: string
}

