import { ToastrService } from 'ngx-toastr';
// import * as Screenfull from "screenfull";

import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../auth/auth.service';
// import { HttpService } from '../../shared/http.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleSidenav = new EventEmitter<void>();
  @Output()
  toggleNotificationSidenav = new EventEmitter<void>();
  len: number = 0;
  // currentUser: string;

  constructor(
    private _authService: AuthService,
    // private _httpService: HttpService,
    private location: Location,
    private router: Router,
    private toastr: ToastrService
  ) {}


  ngOnInit(): void {
    let user = localStorage.getItem("currentUser") !== null ? localStorage.getItem("currentUser") : "";
    // this.currentUser = JSON.parse(user).email;
    // this.getWorkflow();
  }


  //signs user off
  logout(): void {
    this._authService.logout();
    this.router.navigate(['auth/login']);
  }

  //redirects to change password page
  passwordReset(): void {
    
    // let user = JSON.parse(localStorage.getItem("currentUser"));
    // this.router.navigate(['/auth/set-password', {id: user["id"]}]);
  }



  notificationAlert(){
 
    
    if(this.len == 0){
      this.toastr.success("No New Notifications");
    }
  }
  //navigates to previous page
  goBack(): void {
    this.location.back();
  }

  //navigates to single user details page
  viewProfile(): void {
    this.router.navigate(['/users/my-profile']);
  }
}
