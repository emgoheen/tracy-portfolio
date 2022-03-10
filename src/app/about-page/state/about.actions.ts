import { createAction, props } from "@ngrx/store";
import { IAbout } from "src/app/shared/interfaces";

// The following three actions may need to be moved to the main app modules somewhere
// Otherwise, these may be repeated across each of the pages?  Or maybe even if each page
// calls "load...", the data is actually cached and so only one service call is made
export const loadAboutData = createAction(
    '[About] Load'
);

export const loadAboutDataSuccess = createAction(
    '[About] Load Success',
    props<{about: IAbout}>()
);

export const loadAboutDataFailure = createAction(
    '[About] Load Fail',
    props<{error: string}>()
);