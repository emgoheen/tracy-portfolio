export interface IOverviewSlide{
  title: string;
  description: string;
  slidePath: string;
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
  yearStarted: number;
}
