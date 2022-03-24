import { createAction, props } from "@ngrx/store";
import { IAtAGlanceMetrics } from "src/app/shared/interfaces";

// The following three actions may need to be moved to the main app modules somewhere
// Otherwise, these may be repeated across each of the pages?  Or maybe even if each page
// calls "load...", the data is actually cached and so only one service call is made
// See a reference to different design options in my notes on the ngrx Pluralsight course
export const loadHomeData = createAction(
    '[Home] Load'
);

export const loadHomeDataSuccess = createAction(
    '[Home] Load Success',
    props<{metrics: IAtAGlanceMetrics}>()
);

export const loadHomeDataFailure = createAction(
    '[Home] Load Fail',
    props<{error: string}>()
);

export const loadSlideData = createAction(
    '[Home] Load Slide Data'
)