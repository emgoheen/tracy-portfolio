import { Observable } from "rxjs";

export interface ISlideInfo {
  slideTitle: string;
  slideDescription: string;
  slidePath: string;
}

export interface IOverviewSlide{
  slideInfo: ISlideInfo;
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
  slideInfo: ISlideInfo,
  name: string,
  overview: string
  socialInfo: ISocialInfo[];
}

export interface ISocialInfo{
  icon: string;
  url: string;
}

export interface IPortfolio{
  slideInfo: ISlideInfo
  projects: Array<IProject>;
}

export interface IProject{
  slideInfo: ISlideInfo,
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
  slideInfo: ISlideInfo,
  quote: string,
  college: string,
  degree: string,
  collegeRange: string,
  experience: Array<IWorkExperience>
}

export interface IWorkExperience{
  title: string,
  company: string,
  range: string,
  duties: string
}

