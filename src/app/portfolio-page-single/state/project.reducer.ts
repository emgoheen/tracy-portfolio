import { initialProjectData, IProject } from "src/app/shared/interfaces";
import { createReducer, on } from '@ngrx/store';
import { ProjectActions } from ".";

export interface ProjectState{
    project: IProject;
    error: string;
}

const initialState: ProjectState = {
    project: initialProjectData,
    error: ''
}

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
