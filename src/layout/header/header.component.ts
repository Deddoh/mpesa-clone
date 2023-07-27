import { ToastrService } from 'ngx-toastr';
import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../auth/auth.service';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  @Output()
  toggleNotificationSidenav = new EventEmitter<void>();
  len: number = 0;

  constructor(
    private _authService: AuthService,
    private location: Location,
    private router: Router,
    private toastr: ToastrService
  ) {}


  ngOnInit(): void {
   }


  //signs user off
  logout(): void {
    this._authService.logout();
    this.router.navigate(['auth/login']);
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

}
