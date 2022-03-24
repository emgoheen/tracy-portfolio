import { createAction, props } from "@ngrx/store";
import { ITimeline } from "src/app/shared/interfaces";

export const loadTimelineData = createAction(
    '[Timeline] Load'
);

export const loadTimelineDataSuccess = createAction(
    '[Timeline] Load Success',
    props<{timeline: ITimeline}>()
);

export const loadTimelineDataFailure = createAction(
    '[Timeline] Load Fail',
    props<{error: string}>()
);