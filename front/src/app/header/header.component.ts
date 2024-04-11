import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserLogin } from '../Model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean =false;
  constructor(private userService:UserService, private router:Router) {
    this.userService.isUserLoggedIn.subscribe(value=>{
      this.isLoggedIn=value;
    })
  }
  
  changeDisplay(formType: string) {
    const form=document.getElementById(formType);
    if (form)
      if(form.style.display == "none")
        form.style.display="flex";
      else
        form.style.display="none"
  }

  logout(){
    this.userService.isUserLoggedIn.next(this.userService.logout());
    this.router.navigate(['']);
  }
}
