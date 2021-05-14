import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
order_id :any;
total_amount : any;
orderDetailsList :any = [];
billingAddress : any;
shippingAddress :any;
  constructor(private activatedRoute: ActivatedRoute, private adserv:AdminService) { }

  ngOnInit(): void {    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.order_id = params.order_id; 
      this.total_amount = params.total_amount;
     // this.unit_value = params.unit_value;
      console.log("order_id :", this.order_id);     
     // this.orderDetailsList = this.adserv.getOrderDetails(this.order_id);      
      this.adserv.getOrderDetails(this.order_id).subscribe((data:any)=>{     
        console.log("data:", data);
        this.orderDetailsList = data.orderList;
        this.billingAddress = data.billing_address;  
        this.shippingAddress = data.shipping_address;         
      }, error =>{
        console.log(error)
        console.log("error:", error.error)
      });
      
  },
  error => {
    console.log(error);
  });
  }


}
