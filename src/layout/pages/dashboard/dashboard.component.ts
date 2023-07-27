import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/shared/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  form: FormGroup | any;


constructor(
  private crudService: CrudService,
  private fb: FormBuilder
){

}

ngOnInit(){
this.form = this.fb.group({
phone: ["", Validators.required],
amount: ["", Validators.required],
type: ["", Validators.required]

})
}

topUp(data: any){
 let accessToken = this.crudService.getAccessToken();
 console.log("Token", accessToken);
 if(accessToken !== null){
this.crudService.addTopUp(data);
 }
}
}
