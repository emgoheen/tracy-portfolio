import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { PortfolioService } from "src/app/core/services/portfolio.service"
import * as ProjectActions from './project.actions';

@Injectable()
export class ProjectEffects {
    constructor(private actions$: Actions,
        private portfolioService: PortfolioService) { }

    // getMasterPortfolioObs is now a BehaviorSubject, and so we cannot call that
    // observable again.  So there's an additional method in my portfolio service
    // to return the collection that gets set by the call to retrieving the master portfolio.
    // Because the master portfolio is retrieved upon initialization of the service, it's currently
    // assumed that the data is already set in the project collection and merely needs to be returned here.
    loadProjectInfo$ = createEffect(() => {
        return this.actions$.pipe( // Any data coming from the first observable would be data passed in on the user/UI end
            ofType(ProjectActions.loadProjectData),
            concatMap(action => this.portfolioService.getProject(action.projectId).pipe( // Any data coming from the second observable would be data coming back from the service call.
                map(portfolio => ProjectActions.loadProjectDataSuccess({ project: portfolio })),
                catchError(error => of(ProjectActions.loadProjectDataFailure({ error})))
            ))
        )
    })
}