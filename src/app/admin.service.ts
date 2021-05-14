import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   ASM_ADMIN_SERVER_BASE_URL = "http://localhost:3000";
  // ASM_ADMIN_SERVER_BASE_URL = "http://43.241.36.16:4200";
  constructor(private http: HttpClient) { }
  adminLogin(data: any) {
    console.log("server data:", data)
    return this.http.post(this.ASM_ADMIN_SERVER_BASE_URL+"/adminsignin", data);
  }
  forgotPassword(data: any) {
    console.log("data:", data);
    return this.http.post(this.ASM_ADMIN_SERVER_BASE_URL+"/adminForgotPassword", { 'emailID': data })
  }
  getAllCategories() {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }

    return this.http.get(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/getAllCategories", customHeaders);
  }
  getAllSubCategories() {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }

    return this.http.get(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/getAllSubCategories", customHeaders);
  }
  changePassword(data: any) {

    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }
    console.log("server Change password:", data);
    return this.http.post(this.ASM_ADMIN_SERVER_BASE_URL+"/change_admin_password", data, customHeaders);
  }
  creareCategory(data: any) {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }
    //   console.log("server Create category:",data);
    //   console.log('service formData',data); 
    return this.http.post(this.ASM_ADMIN_SERVER_BASE_URL+"/create_category", data, customHeaders);
  }
  creareSubCategory(data: any) {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }
    //   console.log("server Create category:",data);
    //   console.log('service formData',data); 
    return this.http.post(this.ASM_ADMIN_SERVER_BASE_URL+"/create_subcategory", data, customHeaders);
  }

  createUnits(data: any) {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }
    console.log("server Create Units:", data);

    return this.http.post(this.ASM_ADMIN_SERVER_BASE_URL+"/create_unit", data, customHeaders);
  }

  getAllUnits() {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }

    return this.http.get(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/getAllUnits", customHeaders);
  }
  getAllOrders() {    
    return this.http.get(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/new_orders");
  }  
  processingOrders() {  
    return this.http.get(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/processing_orders");
  }
  closedOrders() {    
    return this.http.get(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/closed_orders");
  }
  canceledOrders() {   
    return this.http.get(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/canceled_orders");
  }
  updateOrderStatus(data :any) {    
    return this.http.post(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/update_order_status", data);
  }
  getOrderDetails(data :any) {    
    console.log("getOrderDetails :", data);    
    return this.http.get(this.ASM_ADMIN_SERVER_BASE_URL+"/admin/order_details/"+data);
  }
}
//return this.http.post(this.heroesUrl, data, customHeaders);