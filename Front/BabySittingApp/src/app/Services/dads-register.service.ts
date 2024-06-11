import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadsRegisterService {

  constructor(private HttpService: HttpClient) { }

  register(userInfo: any) {
    const body = {
      id: 0,
      name: userInfo[4] + ' ' + userInfo[5],
      password: userInfo[7],
      photo: userInfo[10],
      location: userInfo[8],
      skills: {
        id: 0,
        cooking: userInfo[1][0],
        firstAid: userInfo[1][1],
        hasCar: userInfo[1][2],
      },
      availableDays: userInfo[2],
      timeSlot: userInfo[3],
      phoneNumber: userInfo[9],
      numberOfChildren: userInfo[0][0],
      infoFamily: userInfo[0][2],
    }
    return this.HttpService.post<any>('https://c18-44-t-java-angular.onrender.com/api/parents/register', body);
  }
}
