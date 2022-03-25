import { initialPortfolioData, IPortfolio } from "src/app/shared/interfaces";
import { createReducer, on } from '@ngrx/store';
import { PortfolioActions } from ".";

export interface PortfolioState{
    portfolio: IPortfolio;
    error: string;
}

const initialState: PortfolioState = {
    portfolio: initialPortfolioData,
    error: ''
}

export const portfolioReducer = createReducer<PortfolioState>(
    initialState,
    on(PortfolioActions.loadPortfolioDataSuccess, (state, action): PortfolioState => {
        return {
            ...state,
            portfolio: action.portfolio,
            error: ''
        }
    }),
    on(PortfolioActions.loadPortfolioDataFailure, (state, action): PortfolioState => {
        return {
            ...state,
            portfolio: initialState.portfolio,
            error: action.error
        }
    })
);