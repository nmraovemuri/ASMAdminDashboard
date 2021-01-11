import { Component, OnInit } from '@angular/core';
import { AdminService} from './../admin.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private adserv:AdminService) { }
  category:any=[];
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories(){
    
    this.adserv.getAllCategories().subscribe((rows)=>{     
      
       this.category = rows;
       console.log("this.category:",this.category)
    }, error =>{
      console.log(error)
      console.log("error:", error.error)
    });
  }
  

}
