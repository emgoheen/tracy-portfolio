import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProject } from '../shared/interfaces';
import { getProjectData, State } from './state/project.reducer';
import * as ProjectActions from './state/project.actions';
declare function contentWayPoint(): void;
declare function sliderMain(): void;
declare function dropdown(): void;
declare function goToTop(): void;
declare function loaderPage(): void;
declare function counterWayPoint(): void;
declare function initializePopups(): void;

@Component({
  selector: 'app-portfolio-page-single',
  templateUrl: './portfolio-page-single.component.html',
  styleUrls: ['./portfolio-page-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioPageSingleComponent implements OnInit, AfterViewInit {
  projectInfo$?: Observable<IProject | undefined>;

  constructor(private route: ActivatedRoute, private store: Store<State>) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      //this.projectInfo$ = this.portfolioService.getProject(p.id);
      // 1.  Dispatch the action
      this.store.dispatch(ProjectActions.loadProjectData({projectId: p.id}));

      // 2.  Select the state needed with a selector (in this case, getting the whole portfolio right now)
      this.projectInfo$ = this.store.select(getProjectData);
    });
  }

  ngAfterViewInit(): void{
    initializePopups();
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
  }
}
