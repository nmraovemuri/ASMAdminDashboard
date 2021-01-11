import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService} from './../admin.service'

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  constructor(private adServ :AdminService) {
    this.getCategories();
   }
  subCategoryData :any ={};
  categories : any;
  ngOnInit(): void {
  }
  getCategories(){
    this.adServ.getAllCategories().subscribe((data:any)=>{
      console.log("Get All Categories Data:", data);
      this.categories = data.data;
      console.log("Get All Categories Data:",this.categories);
    })
  }
  createSubCategory(subCategoryData:any){
    console.log("SubCategory Data :",subCategoryData.value );
    this.adServ.creareSubCategory(subCategoryData.value).subscribe((data)=>{
      console.log("sub cateogories Data:", data);
    })
    
  }
}
