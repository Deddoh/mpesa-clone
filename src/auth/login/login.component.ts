import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
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
  showRegistration: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {    
    
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    } else {
      this.authService.logout();
    }
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';

    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  editField() {
    // document.getElementById('Password').removeAttribute("readonly");
  }

  // register
  register(item: any){
    this.authService.register(item.email.toLowerCase(), item.password)
    .then((res: any)=>{
      
      let userData = localStorage.getItem("currentUser")
      if(userData){
        this.toastr.success("User Created Successfully");
        this.showRegistration = false;
      }
    }, err=>{
      this.errorMessage = err;
    })
  }
  //logs in user
  login(item: any): void {
    this.submitted = true
    this.loading = true;
    this.authService.login(item.email.toLowerCase(), item.password)
      .then((res: any) => {      
        let userData = localStorage.getItem('currentUser');
        let user = userData !== null ? JSON.parse(userData) : ""
        if (this.authService.isLoggedIn) {          
          this.router.navigateByUrl(this.returnUrl);
          this.loading=false;
        } 
      },
        (error:any) => {
          if (error) {
            this.errorMessage = error;
            this.submitted = false
            this.loading = false;
          }
        });

  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRegistration(event: any){
this.showRegistration = !this.showRegistration;
  }
}
