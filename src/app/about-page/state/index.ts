import * as AppState from '../../state/app.state';
import * as AboutActions from './about.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AboutState } from './about.reducer';

// State definitions, selectors, and exported actions under a descriptive name
// go here
export { AboutActions };

export interface State extends AppState.State { // Lazy loaded states here
    about: AboutState;
}

// Can only be used inside of this code file
const getAboutFeatureState = createFeatureSelector<AboutState>('about');

export const getAboutData = createSelector(
    getAboutFeatureState,
    state => state.about
);

export const getError = createSelector(
    getAboutFeatureState,
    state => state.error
);
