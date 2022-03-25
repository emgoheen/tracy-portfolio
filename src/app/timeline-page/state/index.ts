import * as AppState from '../../state/app.state';
import * as TimelineActions from './timeline.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TimelineState } from './timeline.reducer';

// State definitions, selectors, and exported actions under a descriptive name
// go here
export { TimelineActions };

export interface State extends AppState.State { // Lazy loaded states here
    timeline: TimelineState;
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
