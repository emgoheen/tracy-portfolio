import * as AppState from '../../state/app.state';
import * as AboutActions from './about.actions';
import { IAbout, initialAboutData } from "src/app/shared/interfaces";
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export interface State extends AppState.State { // Lazy loaded states here
    about: AboutState;
}

export interface AboutState{
    about: IAbout;
    error: string;
}

const initialState: AboutState = {
    about: initialAboutData,
    error: ''
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

export const aboutReducer = createReducer<AboutState>(
    initialState,
    on(AboutActions.loadAboutDataSuccess, (state, action): AboutState => {
        return {
            ...state,
            about: action.about,
            error: ''
        }
    }),
    on(AboutActions.loadAboutDataFailure, (state, action): AboutState => {
        return {
            ...state,
            about: initialState.about,
            error: action.error
        }
    })
);