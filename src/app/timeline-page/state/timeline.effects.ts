import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PortfolioService } from "src/app/core/services/portfolio.service"
import { TimelineActions } from ".";

@Injectable()
export class TimelineEffects {
    constructor(private actions$: Actions,
        private portfolioService: PortfolioService) { }

    // NOTE:  mergeMap handles subscriptions/requests in parallel so use this when
    // order of the calls doesn't matter.
    loadTimelineInfo$ = createEffect(() => {
        return this.actions$.pipe( // Any data coming from the first observable would be data passed in on the user/UI end
            ofType(TimelineActions.loadTimelineData),
            mergeMap(() => this.portfolioService.getMasterPortfolioObs().pipe( // Any data coming from the second observable would be data coming back from the service call.
                map(portfolio => TimelineActions.loadTimelineDataSuccess({ timeline: portfolio.timeline })),
                catchError(error => of(TimelineActions.loadTimelineDataFailure({ error})))
            ))
        )
    })
}