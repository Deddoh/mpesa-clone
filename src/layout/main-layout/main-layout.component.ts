import {
  Component,
  OnInit
} from "@angular/core";

import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { AuthService } from "src/auth/auth.service";


@Component({
  selector: "app-layout-inner",
  templateUrl: "./main-layout.component.html",
})
export class MainLayoutComponent implements OnInit {
  loading: boolean = true;
  isAuthenticated: boolean = false;

  url!: string;
  sidePanelOpened: any;
  options = {
    collapsed: false,

  };

  constructor(private router: Router, private authService:AuthService) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.isAuthenticated = this.authService.isLoggedIn;
    if(!this.authService.isLoggedIn){
      this.router.navigate(['/auth/login']);
    }
    this.router.events.subscribe((routerEvent: Event)=> {
      this.checkRouterEvent(routerEvent);
    })
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
