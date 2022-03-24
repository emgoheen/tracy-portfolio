import * as AppState from '../../state/app.state';
import * as TimelineActions from './timeline.actions';
import { initialTimelineData, ITimeline } from "src/app/shared/interfaces";
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export interface State extends AppState.State { // Lazy loaded states here
    timeline: TimelineState;
}

export interface TimelineState{
    timeline: ITimeline;
    error: string;
}

const initialState: TimelineState = {
    timeline: initialTimelineData,
    error: ''
}

// Can only be used inside of this code file
const getTimelineFeatureState = createFeatureSelector<TimelineState>('timeline');

export const getTimelineData = createSelector(
    getTimelineFeatureState,
    state => state.timeline
);

export const getError = createSelector(
    getTimelineFeatureState,
    state => state.timeline
);

export const timelineReducer = createReducer<TimelineState>(
    initialState,
    on(TimelineActions.loadTimelineDataSuccess, (state, action): TimelineState => {
        return {
            ...state,
            timeline: action.timeline,
            error: ''
        }
    }),
    on(TimelineActions.loadTimelineDataFailure, (state, action): TimelineState => {
        return {
            ...state,
            timeline: initialState.timeline,
            error: action.error
        }
    })
);