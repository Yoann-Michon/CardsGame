import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private http: HttpClient, private router:Router, private authService:UserService) { }

  signupForm = new FormGroup({
    Name:new FormControl(''),
    Login: new FormControl(''),
    Password: new FormControl(''),
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
    this.http.put<any>(`http://localhost:3010/api/profiles`,this.signupForm.value).subscribe((response:HttpResponse<any>)=> {
      const p=document.getElementById("#p-signup");
      try {
        if (response)
          this.changeDisplay('signup');
          alert('Profil créé avec succès \n Merci de vous connectez.')
        
      } catch (error) {
        console.log(error);
      }
    })
  }
}
