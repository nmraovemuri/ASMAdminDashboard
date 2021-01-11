import { Component, OnInit } from '@angular/core';
import { AdminService} from './../admin.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  constructor(private adServ : AdminService) { }
  allUnits :any;
  ngOnInit(): void {
    this.getUnits();
  }

  getUnits(){
    this.adServ.getAllUnits().subscribe((result:any)=>{
      console.log("GetAll Units:",result.data);
      this.allUnits = result.data;
    })
  }
}
