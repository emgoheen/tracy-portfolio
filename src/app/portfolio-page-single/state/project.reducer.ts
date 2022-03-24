import * as AppState from '../../state/app.state';
import * as ProjectActions from './project.actions';
import { initialProjectData, IProject } from "src/app/shared/interfaces";
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export interface State extends AppState.State { // Lazy loaded states here
    portfolio: ProjectState;
}

export interface ProjectState{
    project: IProject;
    error: string;
}

const initialState: ProjectState = {
    project: initialProjectData,
    error: ''
}

// Can only be used inside of this code file
const getProjectFeatureState = createFeatureSelector<ProjectState>('project');

export const getProjectData = createSelector(
    getProjectFeatureState,
    state => state.project
);

export const getError = createSelector(
    getProjectFeatureState,
    state => state.error
);

export const projectReducer = createReducer<ProjectState>(
    initialState,
    on(ProjectActions.loadProjectDataSuccess, (state, action): ProjectState => {
        return {
            ...state,
            project: action.project,
            error: ''
        }
    }),
    on(ProjectActions.loadProjectDataFailure, (state, action): ProjectState => {
        return {
            ...state,
            project: initialState.project,
            error: action.error
        }
    })
);
