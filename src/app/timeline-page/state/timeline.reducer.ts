import { initialTimelineData, ITimeline } from "src/app/shared/interfaces";
import { createReducer, on } from '@ngrx/store';
import { TimelineActions } from ".";

export interface TimelineState{
    timeline: ITimeline;
    error: string;
}

const initialState: TimelineState = {
    timeline: initialTimelineData,
    error: ''
}

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