import { Component, OnInit } from '@angular/core';
import { AdminService} from './../admin.service'

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {

  constructor(private adserv : AdminService) { }
  subCategory :any;
  ngOnInit(): void {
    this.getAllSubCategories();
  }
  getAllSubCategories(){
    
    this.adserv.getAllSubCategories().subscribe((data)=>{
      
      console.log("Sub Categories Data:",data);
       this.subCategory = data;
    }, error =>{
      console.log(error)
      console.log("error:", error.error)
    });
  }

}
