import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITimeline } from '../shared/interfaces';
import * as TimelineActions from './state/timeline.actions';
import { getTimelineData, State } from './state/timeline.reducer';
declare function contentWayPoint(): void;
declare function sliderMain(): void;
declare function dropdown(): void;
declare function goToTop(): void;
declare function loaderPage(): void;
declare function counterWayPoint(): void;

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {
  timelineInfo$?: Observable<ITimeline>;

  constructor(private store: Store<State>) {
    //this.timelineInfo$ = this.portfolioService.getTimeline();
  }

  ngOnInit(): void {
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();

    // 1.  Dispatch the action
    this.store.dispatch(TimelineActions.loadTimelineData());

    // 2.  Select the state needed with a selector (in this case, getting the whole portfolio right now)
    this.timelineInfo$ = this.store.select(getTimelineData);  
  }
}
