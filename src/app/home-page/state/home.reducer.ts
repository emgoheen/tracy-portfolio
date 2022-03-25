import { IAtAGlanceMetrics, initialHomeData } from "src/app/shared/interfaces";
import { createReducer, on } from '@ngrx/store';
import { HomeActions } from ".";

export interface HomeState{
    metrics: IAtAGlanceMetrics;
    error: string;
}

const initialState: HomeState = {
    metrics: initialHomeData,
    error: ''
}

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