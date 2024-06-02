import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpsServiceService {

  constructor(private HttpService: HttpClient) { }
  
}
