import { Component, OnInit } from '@angular/core';
import { AdminService} from './../admin.service';
import {RouterModule, Router} from '@angular/router';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  todayDate:any;
  todayEndDate :any; 
  category : any={categoryName:''};
  selectedFile : any;
  url :any;
  file :any;
  
  constructor(private adserv:AdminService, private router : Router) {
   
   }
  
  ngOnInit(): void {
    this.todayDate = new Date().toISOString().split('T')[0];
    this.todayEndDate = new Date().toISOString().split('T')[0];
  }
  uploadFile(e :any){
    console.log("Event:",e);
    if(e.target.files)
    {
      var reader = new FileReader();
      this.selectedFile = e.target.files[0];
      this.file = e.target.files[0].name;
      console.log("file:",this.file);
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url = event.target.result;
      }
    }

  }
  createCategory(data:any){
    console.log("user create category :", data.value);  
    const fd = new FormData()
    
   // let f  = new File();
    console.log("filename :",this.selectedFile);
    fd.append("featureImg", this.selectedFile);
    fd.append("categoryName",data.value.categoryName);
    fd.append("description",data.value.description);
    fd.append("status",data.value.status);
    this.adserv.creareCategory(fd).subscribe((rows)=>{     
       this.category = rows;
       console.log("this.category:",this.category)
    },
    error =>{
  console.log(error)
  console.log("error:", error.error)
});
  }
}
