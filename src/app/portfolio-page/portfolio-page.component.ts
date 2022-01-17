import { IOverviewSlide, IProject } from './../shared/interfaces';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../core/services/portfolio.service';
declare function contentWayPoint(): void;
declare function sliderMain(): void;
declare function dropdown(): void;
declare function goToTop(): void;
declare function loaderPage(): void;
declare function counterWayPoint(): void;

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit, AfterViewInit {

  slide: IOverviewSlide =
  {
    "title": "My Work",
    "description": "Samplings of my professional and personal projects",
    "slidePath": "assets/images/SealRock_bg.jpg",
    "placement": "Center",
    "hasAdditionalInfo": false,
    "additionalInfo": "",
    "routerLink": ""
  }

  projects: IProject[] = [
    {
      "title": "Next-Gen media asset management solution",
      "imagePath": "assets/images/GVAMPP_border.jpg",
      "routerLink": "/portfolio/proj1",
      "technologies": "Angular 12, Typescript, Node.js, CSS/SCSS, HTML5 Supporting technologies: Jenkins, Git/Gitflow, Kubernetes"
    },
    {
      "title": "GV Stratus (Web Client)",
      "imagePath": "assets/images/StratusWeb2.jpg",
      "routerLink": "/portfolio/proj2",
      "technologies": "Angular 6, Typescript, Node.js, CSS/SCSS, HTML5"

    },
    {
      "title": "GV Stratus (Desktop Client)",
      "imagePath": "assets/images/StratusDesktop.jpg",
      "routerLink": "/portfolio/proj3",
      "technologies": "C#, WPF/XAML, MVVM"
    },
    {
      "title": "Skills Project",
      "imagePath": "assets/images/skills_border.jpg",
      "routerLink": "portfolio/proj4",
      "technologies": "Angular 12, Typescript, Node.js, Angular Material, CSS/SCSS, HTML5, Bootstrap"

    }
  ]

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
  }
}
