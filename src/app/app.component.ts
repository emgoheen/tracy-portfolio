import { Component, VERSION, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationEnd } from '@angular/router';
declare function initialize(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Emily Tracy';
  year = new Date().getFullYear();

  constructor(private title: Title, private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    initialize();
  }

  // Horizontal menu active/highlighting support
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationEnd) {
      let horizontalNav = document.getElementById("horizontalNav");
      if (routerEvent.url == "/" || routerEvent.url == "/home") {
        this.routerEventHelper("homeNav", ["portfolioNav", "aboutNav", "timelineNav"]);
      }
      else if (routerEvent.url == "/portfolio") {
        this.routerEventHelper("portfolioNav", ["homeNav", "aboutNav", "timelineNav"]);
      }
      else if (routerEvent.url == "/about") {
        this.routerEventHelper("aboutNav", ["homeNav", "portfolioNav", "timelineNav"]);
      }
      else if(routerEvent.url == "/timeline"){
        this.routerEventHelper("timelineNav", ["homeNav", "portfolioNav", "aboutNav"]);
      }
    }
  }

  routerEventHelper(navigateTo: string, navigateFrom: string[]) {
    let horizontalNav = document.getElementById("horizontalNav");

    // Activate selected route/menu item
    let itemNav = horizontalNav?.getElementsByClassName(navigateTo)[0] as HTMLElement;
    if (!itemNav.classList.contains("active")) {
      itemNav.classList.add("active");
    }

    // Deactivate the rest
    for (let n of navigateFrom) {
      let deactivatedItem = horizontalNav?.getElementsByClassName(n)[0] as HTMLElement;
      if (deactivatedItem.classList.contains("active")) {
        deactivatedItem.classList.remove("active");
      }
    }
  }
}
