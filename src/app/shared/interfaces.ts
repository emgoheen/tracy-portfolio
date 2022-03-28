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

export interface IMasterPortfolio{
  about: IAbout,
  portfolio: IPortfolio,
  timeline: ITimeline,
  metrics: IAtAGlanceMetrics
}

// Initial values for use in the reducers
export const initialHomeData: IAtAGlanceMetrics = {
  title: "",
  metrics: []
}

export const initialAboutData: IAbout = {
  slideInfo: {
    slideTitle: "",
    slideDescription: "",
    slidePath: "",
  },
  name: "",
  overview: "",
  socialInfo: []
}

export const initialProjectData: IProject = {
  slideInfo: {
    slideTitle: "",
    slideDescription: "",
    slidePath: ""  
  },
  title: "",
  id: "",
  imagePath: "",
  routerLink: "",
  overviewTechList: "",
  alignment: "",
  source: "",
  description: "",
  fullTechList: []
}

export const initialPortfolioData: IPortfolio = {
  slideInfo: {
    slideTitle: "",
    slideDescription: "",
    slidePath: "",
  },
  projects: [initialProjectData]
}

export const initialTimelineData: ITimeline = {
  slideInfo: {
    slideTitle: "",
    slideDescription: "",
    slidePath: ""  
  },
  quote: "",
  college: "",
  degree: "",
  collegeRange: "",
  experience: []
}

export const initialMasterPortfolioData: IMasterPortfolio = {
  about: initialAboutData,
  portfolio: initialPortfolioData,
  timeline: initialTimelineData, 
  metrics: initialHomeData
}

