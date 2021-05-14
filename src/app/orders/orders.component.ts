import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  new: boolean=true;
  processing : any;
  closed : any;
  canceled : any;


  constructor(private adserv:AdminService) { }
  // table1:any;
  // table2:any;
  // table3:any;
  status:string = "1";
  ordersList:any = [];
  ngOnInit(): void {
    
  }
    onChange(){
      console.log("onchange is clicked", this.status);      
      if(this.new==true){
        this.processing= false;
        this.closed =false
        this.canceled = false
      }
      else if(this.processing==true){
        this.new= false;
        this.closed =false;
        this.canceled = false
      }
      else if(this.closed==true){
        this.new= false;
        this.processing =false
        this.canceled = false
      }
      else return 
    }    
}
