import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService} from './../admin.service';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {

  constructor(private adServ : AdminService) { }
  units : any={};
  ngOnInit(): void {
    
  }

  createUnit(units:any){
    this.adServ.createUnits(units.value).subscribe((data)=>{
      console.log("create Units data:",data);
      })

  }
}
