import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './../shared/must-match.validator'
import { Router } from '@angular/router';
import { AdminService} from './../admin.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  fb: any;
  changePasswordForm: any;
  submitted = false;
  oldPassword :any;
  newPassword :any;
  alert : boolean = false;
  constructor(private adServ:AdminService , private router : Router, private formbuilder:FormBuilder) { }
  model:any={};
  data:any;
  apiResponse:any;
  


  ngOnInit(): void {
    this.changePasswordForm = this.formbuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]], 
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
      
    });    
  }
  
  get f() { return this.changePasswordForm.controls; }

 

  onSubmit(f:any){
    
  //  event?.preventDefault();
  localStorage.getItem("admin-token")
  let emailID = localStorage.getItem("emailID");
   console.log("email:",emailID);
   
   let payload =f.value;
   payload.emailID = emailID;
   console.log("payload:",payload)
    this.adServ.changePassword(payload).subscribe((data)=>{
      this.alert = true;
      console.log("Change  password Data:",data);
      this.apiResponse=data;
      console.log("errors:",this.apiResponse.error);
      if(this.apiResponse.status === "success" ){
        this.router.navigate([`/home`]);
      }

      
    })
    

//    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.changePasswordForm.value))
}
closeAlert()
{
  this.alert = false;
}

  }
  
