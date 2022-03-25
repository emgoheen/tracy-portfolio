import * as AppState from '../../state/app.state';
import * as ProjectActions from './project.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState } from './project.reducer';

// State definitions, selectors, and exported actions under a descriptive name
// go here
export { ProjectActions };

export interface State extends AppState.State { // Lazy loaded states here
    portfolio: ProjectState;
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
