import { createAction, props } from "@ngrx/store";
import { IProject } from "src/app/shared/interfaces";

export const loadProjectData = createAction(
    '[Project] Load',
    props<{projectId: string}>()
);

export const loadProjectDataSuccess = createAction(
    '[Project] Load Success',
    props<{project: IProject}>()
);

export const loadProjectDataFailure = createAction(
    '[Project] Load Fail',
    props<{error: string}>()
);