import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  todayDate:any;
  todayEndDate :any;  
  constructor() { }

  ngOnInit(): void {
    this.todayDate = new Date().toISOString().split('T')[0];
    this.todayEndDate = new Date().toISOString().split('T')[0];
  }

}
