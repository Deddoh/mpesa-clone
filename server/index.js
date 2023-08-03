const express = require('express');
const cors = require('cors')
const request = require('request');
const app = express();


app.use(cors());

    app.get("/access-token", (req, res)=>{
        request({
            url: "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
            method: "GET",
            headers: {
                "Authorization": "Basic MVNQM2lWQ1dYa25GWDFMY2ZRWWp2UG45VmlkeDJUWGk6Rlp2M1d2NDFEYmFET1VzRg=="
            }
        },
        (error,response, body)=>{
            if(error){
                res.json({
                    "error": error
                })
            } else {
             return   res.json({
                    "Success":true,
                    message: JSON.parse(body)
                })
            }
        }
        
        )
        
    })

    app.post("/stkpush", (req, res)=>{
        const {access_token, amount, phone,Order_ID} = req.params;
        const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
        const callback_url = "http://localhost";
        let date = new Date()
        const timestamp = date.getFullYear() + "" + "" + date.getMonth() + "" + "" + date.getDate() + "" + "" + date.getHours() + "" + "" + date.getMinutes() + "" + "" + date.getSeconds()
        const password = new Buffer.from("174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + timestamp).toString('base64')

    
    request(
        {
    url:url,
    method:"POST",
    headers: {
    "Authorization": "Bearer " + access_token,

    },
    json : {
        "BusinessShortCode": "174379",
        "Password": password,
        "Timestamp": timestamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": phone,
        "PartyB": "174379",
        "PhoneNumber": phone,
        "CallBackURL": `${callback_url}/api/stkPushCallback`,
        "AccountReference": "Quikk Test By Dedan",
        "TransactionDesc": "Paid online"
    }


        },
        (error, response, body)=>{
            if(error){
                return res.json({
                    Error: error
                })
            } else {
                return res.json({
                    message: body
                })
            }
        }
        )
    

      


        // console.log("callback ",callback_url)
       
        // this.httpClient.post(url,json, {headers: this.getHeaders()} ).subscribe((res)=>{
        //   this.toastr.success("Top Up request received successfully!", "Success")
        // }, err=>{
        //   console.error("Error while trying to create LipaNaMpesa details",err)
        //   this.toastr.error(
        //       "Something went wrong while trying to create LipaNaMpesa details. Contact admin",
        //       err
        //   )
        // })
      
    
        
    

})

app.listen(2000, ()=>{
    console.log(`Listening on port 2000...`)
})