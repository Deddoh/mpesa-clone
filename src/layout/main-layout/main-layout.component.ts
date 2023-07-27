import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";

import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";


@Component({
  selector: "app-layout-inner",
  templateUrl: "./main-layout.component.html",
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  loading: boolean = true;

  url!: string;
  sidePanelOpened: any;
  options = {
    collapsed: false,

  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url = this.router.url;
    
    this.router.events.subscribe((routerEvent: Event)=> {
      this.checkRouterEvent(routerEvent);
    })
  }

  ngOnDestroy(): void {
    // this.layoutRouter.unsubscribe();
  }


  checkRouterEvent(routerEvent: Event){
    if(routerEvent instanceof NavigationStart){
      this.loading = true;
    }
    if(routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError){
        this.loading = false;
      }

  }
}
