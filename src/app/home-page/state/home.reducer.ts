import * as AppState from '../../state/app.state';
import * as HomeActions from './home.actions';
import { IAtAGlanceMetrics, initialHomeData, IOverviewSlide } from "src/app/shared/interfaces";
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export interface State extends AppState.State { // Lazy loaded states here
    metrics: HomeState;
}

export interface HomeState{
    metrics: IAtAGlanceMetrics;
    error: string;
}

export interface HomeSlideState{
    slides: IOverviewSlide[];
}

const initialState: HomeState = {
    metrics: initialHomeData,
    error: ''
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

export const homeReducer = createReducer<HomeState>(
    initialState,
    on(HomeActions.loadHomeDataSuccess, (state, action): HomeState => {
        return {
            ...state,
            metrics: action.metrics,
            error: ''
        }
    }),
    on(HomeActions.loadHomeDataFailure, (state, action): HomeState => {
        return {
            ...state,
            metrics: initialState.metrics,
            error: action.error
        }
    })
);