import * as AppState from '../../state/app.state';
import * as PortfolioActions from './portfolio.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PortfolioState } from './portfolio.reducer';

// State definitions, selectors, and exported actions under a descriptive name
// go here
export { PortfolioActions };

export interface State extends AppState.State { // Lazy loaded states here
    portfolio: PortfolioState;
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
