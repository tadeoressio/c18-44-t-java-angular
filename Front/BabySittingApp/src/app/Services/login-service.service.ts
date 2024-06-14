import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  UserMail: string = '';
  UserPassword: string = '';
  UserDadLogged: boolean = false;
  UserBabySitterLogged: boolean = false;

  constructor(private HttpService: HttpClient) { }

  Login(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    }
    return this.HttpService.post<any>('https://c18-44-t-java-angular-1.onrender.com/login/login', body);
  }
  DadLogged(): boolean {
    this.UserDadLogged = true;
    this.UserBabySitterLogged = false;
    return (this.UserDadLogged);
  }
  BabySitterLogged(): boolean {
    this. UserBabySitterLogged = true;
    this.UserDadLogged = false;
    return this.UserBabySitterLogged;
  }
  DadLoggedStatus(): boolean {
    return this.UserDadLogged;
  }
  BabySitterLoggedStatus(): boolean {
    return this.UserBabySitterLogged;
  }
  LogOut() {
    this.UserDadLogged = false;
    this.UserBabySitterLogged = false;
  }
}
