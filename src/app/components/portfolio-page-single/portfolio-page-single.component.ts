import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  styleUrls: ['./portfolio-page-single.component.scss']
})
export class PortfolioPageSingleComponent implements OnInit, AfterViewInit {

  imagePath: string = "";
  projTitle: string = "";
  projSubTitle: string = "";
  desc: string = "";
  technologies: string[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    initializePopups();

    this.route.params.subscribe(p => {
      this.setImage(p.id);
      this.setProjectTitle(p.id);
      this.setProjectSubTitle(p.id);
      this.setDescription(p.id);
      this.setClientTechnologies(p.id);
    });
  }

  ngAfterViewInit(): void{
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
  }

  public get image() {
    return this.imagePath;
  }

  public get projectTitle() {
    return this.projTitle;
  }

  public get projectSubTitle(){
    return this.projSubTitle;
  }

  public get description(){
    return this.desc;
  }

  public get clientTechnologies(){
    return this.technologies;
  }

  public setImage(id: string){
    if(id == "proj1"){
      this.imagePath = "assets/images/GVAMPP_border.jpg";
    }
    else if(id == "proj2"){
      this.imagePath = "assets/images/StratusWeb2.jpg";
    }
    else if(id == "proj3"){
      this.imagePath = "assets/images/StratusDesktop.jpg";
    }
    else if(id == "proj4"){
      this.imagePath = "assets/images/skills_border.jpg";
    }
  }

  public setProjectTitle(id: string){
    if(id == "proj1"){
      this.projTitle = "AMPP Asset Management"
    }
    else if(id == "proj2"){
      this.projTitle = "GV Stratus (Web Client)"
    }
    else if(id == "proj3"){
      this.projTitle = "GV Stratus (Desktop Client)";
    }
    else if(id == "proj4"){
      this.projTitle = "Skills Project";
    }
  }

  public setProjectSubTitle(id: string){
    if(id == "proj1" || id == "proj2" || id == "proj3"){
      this.projSubTitle = "Company:  Grass Valley";
    }
    else if(id == "proj4"){
      this.projSubTitle = "Personal Project";
    }
  }

  public setDescription(id: string){
    if(id == "proj1"){
      this.desc = "A next-generation media asset management system soon to be available through the GV AMPP cloud-native platform within the  <a href='https://www.grassvalley.com/products/cloud-based-workflows/cloud-based-workflows/gv-ampp/' target='_blank'> GV Media Universe</a> ecosystem.  Some of the features will include support for content creators who need to search, edit and organize their media.";
    }
    else if(id == "proj2"){
      this.desc = "A web-based content management system that aids in video production and editing workflows.  It contains a comprehensive toolset that includes video metadata management, search, hierarchical folder organization, high-resolution or proxy access to shared storage content, editing/logging, and more.  A complete description and demo can be found <a href='https://www.grassvalley.com/products/media-asset-management/gv-stratus/' target='_blank'> here</a>.";
    }
    else if(id == "proj3"){
      this.desc = "A rich WPF desktop content management system that aids in video production and editing workflows.  It contains a comprehensive toolset that includes channel injest and playout, video metadata management, search, hierarchical folder organization, high-resolution or proxy access to shared storage content, editing/logging, and more.  A complete description and demo can be found <a href='https://www.grassvalley.com/products/media-asset-management/gv-stratus/' target='_blank'> here</a>.";
    }
    else if(id == "proj4"){
      this.desc = "A personal project that displays a resume and credential set for myself and my husband in order to demonstrate proficiency in Angular, Typescript, HTML5, and Angular Material concepts.  The website can be found <a href='https://retracy.github.io/skills/home/emily' target='_blank'> here</a>.";
    }
  }

  public setClientTechnologies(id: string){
    if(id == "proj1"){
      this.technologies = ["Angular 12", "Typescript", "Node.js", "CSS/SCSS", "HTML5", "RxJS", "Jenkins", "Git/Gitflow", "Kubernetes", ".NET Core"];
    }
    else if(id == "proj2"){
      this.technologies = ["Angular 6", "Typescript", "Node.js", "CSS/SCSS", "HTML5", "RxJS", ".NET Core"];
    }
    else if(id == "proj3"){
      this.technologies = ["C#", "WPF/XAML", "MVVM"];
    }
    else if(id == "proj4"){
      this.technologies = ["Angular 12", "Typescript", "Node.js", "CSS/SCSS", "HTML5", "RxJS", "Angular Material"];
    }
  }
}
