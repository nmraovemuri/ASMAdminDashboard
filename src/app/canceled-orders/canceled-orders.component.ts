import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-canceled-orders',
  templateUrl: './canceled-orders.component.html',
  styleUrls: ['./canceled-orders.component.css']
})
export class CanceledOrdersComponent implements OnInit {

  constructor(private adserv:AdminService, public router: Router) { }
  ordersList:any = [];
  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){    
    this.adserv.canceledOrders().subscribe((data:any)=>{     
      console.log("orderslist:", data);        
       this.ordersList = data.ordersList;
       console.log("No. of orders:",this.ordersList)
    }, error =>{
      console.log(error)
      console.log("error:", error.error)
    });
  }
  statusUpdate(order_id:any){
    console.log("order_id:", order_id);
    let data = {
      order_id
    }
    this.adserv.updateOrderStatus(data).subscribe((data:any)=>{     
      console.log("update Order Status:", data);      
      this.ordersList = this.ordersList.filter((order:any) =>order.order_id != order_id)  
    }, error =>{
      console.log(error)
    });    
  }
  
  showOrderDetails(order_id:any, total_amount:any){
    console.log("show order details ID:", order_id);   
    this.router.navigate([`/order-details/${order_id}/${total_amount}`]);
  }

}
