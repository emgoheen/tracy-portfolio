import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PortfolioService } from "src/app/core/services/portfolio.service"
import * as PortfolioActions from './portfolio.actions';

@Injectable()
export class PortfolioEffects {
    constructor(private actions$: Actions,
        private portfolioService: PortfolioService) { }

    // NOTE:  mergeMap handles subscriptions/requests in parallel so use this when
    // order of the calls doesn't matter.
    loadPortfolioInfo$ = createEffect(() => {
        return this.actions$.pipe( // Any data coming from the first observable would be data passed in on the user/UI end
            ofType(PortfolioActions.loadPortfolioData),
            mergeMap(() => this.portfolioService.getMasterPortfolioObs().pipe( // Any data coming from the second observable would be data coming back from the service call.
                map(portfolio => PortfolioActions.loadPortfolioDataSuccess({ portfolio: portfolio.portfolio })),
                catchError(error => of(PortfolioActions.loadPortfolioDataFailure({ error})))
            ))
        )
    })
}