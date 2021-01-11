import { Component, OnInit } from '@angular/core';
import { RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }
  
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('admin-token');
    localStorage.removeItem('emailID');
    this.router.navigate([`/`]);
  }

}
