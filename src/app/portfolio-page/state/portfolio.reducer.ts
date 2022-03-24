import * as AppState from '../../state/app.state';
import * as PortfolioActions from './portfolio.actions';
import { initialPortfolioData, IPortfolio } from "src/app/shared/interfaces";
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export interface State extends AppState.State { // Lazy loaded states here
    portfolio: PortfolioState;
}

export interface PortfolioState{
    portfolio: IPortfolio;
    error: string;
}

const initialState: PortfolioState = {
    portfolio: initialPortfolioData,
    error: ''
}

// Can only be used inside of this code file
const getPortfolioFeatureState = createFeatureSelector<PortfolioState>('portfolio');

export const getPortfolioData = createSelector(
    getPortfolioFeatureState,
    state => state.portfolio
);

export const getError = createSelector(
    getPortfolioFeatureState,
    state => state.error
);

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