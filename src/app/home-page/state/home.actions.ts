import { createAction, props } from "@ngrx/store";
import { IAtAGlanceMetrics } from "src/app/shared/interfaces";

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