import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { AdminService} from './../admin.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adserv: AdminService, private router : Router, frms : FormsModule) { } 
  loginData:any={}
   tokendata:any;
  
  ngOnInit(): void {
  }
  
  adminLogin(loginData:any){
    console.log("admin Login Data:",loginData.value);
    this.adserv.adminLogin(loginData.value).subscribe((data)=>{
      
      console.log("Admin user data:",data);
      this.tokendata = data;
      localStorage.setItem("admin-token",this.tokendata.token);
      localStorage.setItem("emailID",this.tokendata.emailID);
      this.router.navigate([`/home`]);
     
    },
    error =>{
    console.log(error)
    console.log("error:", error.error)
  }
  ); 
  }
  
}
