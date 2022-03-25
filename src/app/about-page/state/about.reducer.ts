import { IAbout, initialAboutData } from "src/app/shared/interfaces";
import { createReducer, on } from '@ngrx/store';
import { AboutActions } from ".";

export interface AboutState{
    about: IAbout;
    error: string;
}

const initialState: AboutState = {
    about: initialAboutData,
    error: ''
}

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