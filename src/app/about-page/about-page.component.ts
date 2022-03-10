import { IAbout } from './../shared/interfaces';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAboutData, State } from './state/about.reducer';  // IMPORTANT:  import state from the reducer and not from ngrx/store OR from app module
import * as AboutActions from './state/about.actions';

declare function contentWayPoint(): void;
declare function sliderMain(): void;
declare function dropdown(): void;
declare function goToTop(): void;
declare function loaderPage(): void;
declare function counterWayPoint(): void;

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, AfterViewInit {
  about$?: Observable<IAbout>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // 1.  Dispatch the action
    this.store.dispatch(AboutActions.loadAboutData());

    // 2.  Select the state needed with a selector (in this case, getting the whole portfolio right now)
    // TODO:  Left off here, need to add another selector for retrieving just the "about" chunk
    this.about$ = this.store.select(getAboutData);
  }

  ngAfterViewInit(): void {
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
  }
}
