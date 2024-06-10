import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  UserMail: string = '';
  UserPassword: string = '';

  constructor(private HttpService: HttpClient) { }

  Login(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    }
    console.log(body)
    return this.HttpService.post<any>('http://localhost:8080/login/login', body);
  }
}
