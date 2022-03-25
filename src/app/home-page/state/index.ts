import * as AppState from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';
import * as HomeActions from './home.actions';

// State definitions, selectors, and exported actions under a descriptive name
// go here
export { HomeActions };

export interface State extends AppState.State { // Lazy loaded states here
    metrics: HomeState;
}

// Can only be used inside of this code file
const getHomeFeatureState = createFeatureSelector<HomeState>('home');

export const getHomeData = createSelector(
    getHomeFeatureState,
    state => state.metrics
);

export const getError = createSelector(
    getHomeFeatureState,
    state => state.error
);
