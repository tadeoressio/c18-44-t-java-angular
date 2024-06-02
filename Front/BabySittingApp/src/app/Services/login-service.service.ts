import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  UserMail: string = '';
  UserPassword: string = '';

  constructor(private HttpService: HttpClient) { }

  Login(UserMail: string, UserPassword: string) {
    const body = {
      mail: UserMail,
      password: UserPassword,
    }
    return this.HttpService.post<any>('/url', body)
  }
}
