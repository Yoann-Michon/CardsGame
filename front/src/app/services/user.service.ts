import { Injectable } from '@angular/core';
import { UserWebService } from './dal/user-web-service.service';
import { User, UserLogin } from '../Model/user.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private isLoggedIn:boolean=false;
  public isUserLoggedIn:  BehaviorSubject<boolean>= new BehaviorSubject<boolean>(this.isLoggedIn);
  constructor(private userWebService: UserWebService) { }

  login(login:UserLogin){
    this.isLoggedIn = true;
    return this.userWebService.login(login);
  }

  createUser(user:User){
    console.log(user);
    return this.userWebService.createUser(user);
  }

  logout() {
    return this.isLoggedIn = false;
  }

  isLogged(): boolean {
    return this.isLoggedIn;
  }
}
