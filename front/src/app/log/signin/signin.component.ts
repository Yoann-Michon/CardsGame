import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserLogin } from 'src/app/Model/user.model';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {

  constructor(private http: HttpClient, private router:Router, private authService:UserService) { }

  signinForm = new FormGroup({
    Login: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
  });

  changeDisplay(formType: string) {
    const form=document.getElementById(formType);
    if (form)
      if(form.style.display == "none")
        form.style.display="flex";
      else
        form.style.display="none"
  }

  onSubmit() {
    this.http.post<any>(`http://localhost:3010/api/login`,this.signinForm.value).subscribe((response:HttpResponse<any>)=> {
      try {
        const userLogin: UserLogin = {
          login: this.signinForm.value.Login?this.signinForm.value.Login:"",
          password: this.signinForm.value.Password?this.signinForm.value.Password:"",
        };
        if (response)
          this.authService.login(userLogin);
          this.authService.isUserLoggedIn.next(this.authService.isLogged());
          this.changeDisplay('signin');
          this.router.navigate(['/dashboard']);
      } catch (error) {
        console.log(error);
      }
    })
  }
}