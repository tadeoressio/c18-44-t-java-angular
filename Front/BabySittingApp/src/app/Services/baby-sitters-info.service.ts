import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BabySittersInfoService {

  constructor(private HttpService: HttpClient) { }


  allBabySitters() {
    return this.HttpService.get<any>('https://c18-44-t-java-angular-1.onrender.com/api/nanny');
  }

}
