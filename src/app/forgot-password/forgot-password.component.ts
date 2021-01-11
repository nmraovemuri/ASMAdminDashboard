import { Component, OnInit } from '@angular/core';
import {  AdminService } from './../admin.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private adserv : AdminService) { }
 pwd :any;
 email :any;

 apiResponse:any;

  ngOnInit(): void {
  }
  forgotPassword(){
    console.log("email:",this.email);
    this.adserv.forgotPassword(this.email).subscribe((data)=>{
      this.apiResponse =data;
      if(this.apiResponse.status)
{
     localStorage.setItem('email',this.email);
}      console.log("forgot password data :",data);
    })
  }

}
