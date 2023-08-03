import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/shared/crud.service';
// import uniqid from 'uniqid'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  form: FormGroup | any;
  other: boolean = false;

  uniqid = require('uniqid'); 
  accessToken: any;

constructor(
  private crudService: CrudService,
  private fb: FormBuilder
){

}

ngOnInit(){
this.form = this.fb.group({
phone: ["", Validators.required],
amount: ["", Validators.required],
type: ["", Validators.required],
recepient: [null]
});

this.form.get("type").valueChanges.subscribe((res:any)=>{
  res === "Debit" ? this.other = true : this.other = false;
})

}

topUp(data: any){

 this.crudService.getAccessToken().subscribe((res:any)=>{
   res.message.access_token;
setTimeout(()=>{
  this.accessToken = localStorage.getItem("tokenBody")
  console.log("Access Token", this.accessToken);

  if(this.accessToken !== undefined){
    data["access_token"] = this.accessToken;
    console.log("DATA", data);
    
    this.crudService.initiateSTKPush(data).subscribe((res: any)=>{
      console.log("STK PUSH", res);
      
    })
    data["transactionId"]=this.uniqid('EC');
    data["dateCreated"] = Date.now();
  // this.crudService.addTopUp(data)
   }
}, 2000)
 });

}
}
