import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  showLoginButton = true;
  showLogoutButton = false;
  ngOnInit() {
    const id = localStorage.getItem('id');
    if(id){
      this.showLoginButton = false;
      this.showLogoutButton = true;
    }
    console.log(id);
  }
  logout(){
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    this.router.navigate(['/login'])
  }

}
