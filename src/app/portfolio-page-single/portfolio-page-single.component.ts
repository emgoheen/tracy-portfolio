import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PortfolioService } from '../core/services/portfolio.service';
import { IProject } from '../shared/interfaces';
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

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.projectInfo$ = this.portfolioService.getProject(p.id);
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
