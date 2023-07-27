import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string = "";
  form: FormGroup | any;
  loading: boolean = false;
  returnUrl: any;
  fieldTextType: boolean = false;
  submitted: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute

  ) {
    // if (authService.currentUser) {
    //   this.router.navigate(['/']);
    // } else {
    //   authService.logout();
    // }
  }

  ngOnInit(): void {    
    
    // if (this.authService.currentUser) {
    //   this.router.navigate(['/']);
    // } else {
    //   this.authService.logout();
    // }
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';

    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  editField() {
    // document.getElementById('Password').removeAttribute("readonly");
  }

  //logs in user
  onSubmit(item: any): void {
    this.submitted = true
    this.loading = true;
    this.authService.login(item.email.toLowerCase(), item.password)
      .pipe(first())
      .subscribe((res: any) => {
        res;       
        let userData = localStorage.getItem('currentUser');
        let user = userData !== null ? JSON.parse(userData) : ""
        if (user["first_time_login"] == false) {          
          this.router.navigateByUrl(this.returnUrl);
        } 
        // else if(!pass && user["first_time_login"] == false){
        //   this.authService.setPoliteRequest.next(true)
        //   this.router.navigate(["/auth/set-password"])
        // }
        // else {
        //   this.router.navigate(["/auth/set-password"])
        // }
      },
        (error:any) => {
          if (error) {
            let errorItem = error.error;
            this.errorMessage = errorItem.error_description;
            this.submitted = false
            this.loading = false;
          }
        });

  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
