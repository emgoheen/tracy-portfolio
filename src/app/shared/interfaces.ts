export interface IOverviewSlideDeck {
  overviewSlideDeck: IOverviewSlide[];
}

export interface IOverviewSlide{
  title: string;
  description: string;
  slidePath: string;
  hasAdditionalInfo: boolean;
  additionalInfo: string;
}
