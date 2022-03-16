import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PortfolioService } from "src/app/core/services/portfolio.service"
import * as AboutActions from './about.actions';

@Injectable()
export class AboutEffects {
    constructor(private actions$: Actions,
        private portfolioService: PortfolioService) { }

    // NOTE:  mergeMap handles subscriptions/requests in parallel so use this when
    // order of the calls doesn't matter.
    loadAboutInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AboutActions.loadAboutData),
            mergeMap(() => this.portfolioService.getMasterPortfolioObs().pipe(
                map(portfolio => AboutActions.loadAboutDataSuccess({ about: portfolio.about })),
                catchError(error => of(AboutActions.loadAboutDataFailure({ error})))
            ))
        )
    })
}