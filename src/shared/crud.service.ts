import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { ToastrService } from 'ngx-toastr';
import {Buffer} from 'buffer';
import * as corsModule from "cors";
import { map } from 'rxjs/operators';
  const cors = corsModule({origin: true})

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore, private httpClient: HttpClient, private toastr: ToastrService) { }


  private getHeaders(): HttpHeaders {
  const auth =   Buffer.from(`"1SP3iVCWXknFX1LcfQYjvPn9Vidx2TXi":"FZv3Wv41DbaDOUsF"` ).toString('base64') 

    return new HttpHeaders()
    .set("grant_type", "client_credentials")
    .set('Authorization', "Basic cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==")
    .set("Access-Control-Allow-Origin", "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials")
    .set("Access-Control-Allow-Methods", "*")
    .set("Access-Control-Allow-Headers", "Content-Type")
    .set("username", "1SP3iVCWXknFX1LcfQYjvPn9Vidx2TXi")
    .set("password", "FZv3Wv41DbaDOUsF")
  }
  // add top up to my number
  addTopUp(amount: any){
    amount.id = this.afs.createId();
    return this.afs.collection('/TopUp').add(amount).then((res)=>{
      this.toastr.success(`Your Top Up request of Ksh. ${amount.amount} to ${amount.recepient !== null? amount.recepient : ""} ${amount.phone}  was successful. \n Transaction ID: ${amount.transactionId}`)
    })
  }

  // get all top ups
  getTopUps(){
    return this.afs.collection('/TopUp').snapshotChanges();
  }

  // delete top up
  deleteTopUp(data: any){
    return this.afs.doc('/TopUp/'+data.id).delete();
  }

  // get single top up
  getSingleTopUp(data: any){
    return this.afs.doc('/TopUp/'+data.id).get();
  }
// Mpesa stk push
  getAccessToken(){

 return  this.httpClient.get("http://localhost:2000/access-token", {headers: this.getHeaders()})
   
    .pipe(map((res:any)=>{
      res = res
      localStorage.setItem("tokenBody", res["message"]["access_token"])
      return res
    }))
  }

initiateSTKPush(data: any){
  return this.httpClient.post("http://localhost:2000/stkpush", data, {headers: this.getHeaders()})

  .pipe(map((res: any)=>{
    res = res 
    return res;
  }))
}

  initiateSTKPushs (req: any){
    

        const {amount, phone,Order_ID} = req
        const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
        const auth = "Bearer " + req.safaricom_access_token

        // const timestamp = getTimestamp()
        //shortcode + passkey + timestamp
        const password = Buffer.from("174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919").toString('base64')
        // create callback url
        const callback_url = "http://localhost";
        


        console.log("callback ",callback_url)
        let json = {
          "BusinessShortCode": "174379",
          "Password": password,
          // "Timestamp": timestamp,
          "TransactionType": "CustomerPayBillOnline",
          "Amount": amount,
          "PartyA": phone,
          "PartyB": "174379",
          "PhoneNumber": phone,
          "CallBackURL": `${callback_url}/api/stkPushCallback`,
          "AccountReference": "Quikk Test By Dedan",
          "TransactionDesc": "Paid online"
      }
        this.httpClient.post(url,json, {headers: this.getHeaders()} ).subscribe((res)=>{
          this.toastr.success("Top Up request received successfully!", "Success")
        }, err=>{
          console.error("Error while trying to create LipaNaMpesa details",err)
          this.toastr.error(
              "Something went wrong while trying to create LipaNaMpesa details. Contact admin",
              err
          )
        })
      
    
        
    }
}


