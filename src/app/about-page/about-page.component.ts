import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  desc: string = "";

  constructor() { }

  ngOnInit(): void {
    this.setDescription();
  }

  ngAfterViewInit(): void{
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
  }

  private setDescription(){
    this.desc = "I am an experienced software developer specializing in UI and frontend design and development. My interest in visual-based programming started at Cal Poly when I took classes in virtual reality and animation. These influenced me to do my senior project using Java 3D to highlight the visual effects on object positioning from specific types of matrix math computations. For a good portion of my career, I've been writing software applications for the live production/broadcast markets. I began with Windows-based application development using C#, Windows Forms, and then eventually, WPF and XAML. In more recent years, my focus has shifted to developing web-based applications using Angular and Typescript. If you are in need of some Angular web development experience, I may be able to help!";
  }

  public get description(){
    return this.desc;
  }
}
