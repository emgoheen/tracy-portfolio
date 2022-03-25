import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PortfolioService } from "src/app/core/services/portfolio.service"
import { HomeActions } from ".";

@Injectable()
export class HomeEffects {
    constructor(private actions$: Actions,
        private portfolioService: PortfolioService) { }

    // NOTE:  mergeMap handles subscriptions/requests in parallel so use this when
    // order of the calls doesn't matter.
    loadHomeInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.loadHomeData),
            mergeMap(() => this.portfolioService.getMasterPortfolioObs().pipe(
                map(portfolio => HomeActions.loadHomeDataSuccess({ metrics: portfolio.metrics })),
                catchError(error => of(HomeActions.loadHomeDataFailure({ error})))
            ))
        )
    })
}