import { createAction, props } from "@ngrx/store";
import { IPortfolio } from "src/app/shared/interfaces";

export const loadPortfolioData = createAction(
    '[Portfolio] Load'
);

export const loadPortfolioDataSuccess = createAction(
    '[Portfolio] Load Success',
    props<{portfolio: IPortfolio}>()
);

export const loadPortfolioDataFailure = createAction(
    '[Portfolio] Load Fail',
    props<{error: string}>()
);