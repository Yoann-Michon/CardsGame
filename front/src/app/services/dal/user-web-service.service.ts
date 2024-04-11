import { Injectable } from '@angular/core';
import { User, UserLogin } from 'src/app/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserWebService {

  constructor() { }

  async login(loginModel: UserLogin){
    const response = await fetch(`http://localhost:3010/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginModel)
    });
    return response.json();
  }

  async getUsers(){
    const response = await fetch("http://localhost:3010/api/profiles");
    return response.json();
  }

  async getUserById(userId: number){
    const response = await fetch(`http://localhost:3010/api/profiles/${userId}`);
    return response.json();
  }

  async createUser(user: User){
    const response = await fetch(`http://localhost:3010/api/profiles`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return response.json();
  }
}
