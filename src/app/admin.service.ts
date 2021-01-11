import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  adminLogin(data: any) {


    console.log("server data:", data)
    return this.http.post("http://localhost:3000/adminsignin", data);
  }
  forgotPassword(data: any) {
    console.log("data:", data);
    return this.http.post("http://localhost:3000/adminForgotPassword", { 'emailID': data })
  }
  getAllCategories() {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }

    return this.http.get("http://localhost:3000/admin/getAllCategories", customHeaders);
  }
  getAllSubCategories() {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }

    return this.http.get("http://localhost:3000/admin/getAllSubCategories", customHeaders);
  }
  changePassword(data: any) {

    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }
    console.log("server Change password:", data);
    return this.http.post("http://localhost:3000/change_admin_password", data, customHeaders);
  }
  creareCategory(data: any) {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }
    //   console.log("server Create category:",data);
    //   console.log('service formData',data); 
    return this.http.post("http://localhost:3000/create_category", data, customHeaders);
  }
  creareSubCategory(data: any) {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }
    //   console.log("server Create category:",data);
    //   console.log('service formData',data); 
    return this.http.post("http://localhost:3000/create_subcategory", data, customHeaders);
  }

  createUnits(data: any) {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }
    console.log("server Create Units:", data);

    return this.http.post("http://localhost:3000/create_unit", data, customHeaders);
  }

  getAllUnits() {
    let customHeaders = {
      headers: { Authorization: "Bearer " + localStorage.getItem("admin-token") }
    }

    return this.http.get("http://localhost:3000/admin/getAllUnits", customHeaders);
  }
}
//return this.http.post(this.heroesUrl, data, customHeaders);