import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private HttpService: HttpClient) { }

  sendRequest(idDad: number, idBabySitter: number) {
    const body = {
      id: 0,
      nannyId: idBabySitter,
      parentId: idDad,
      status: "Pending",
      comment: "comentario vacío",
      contactMethod: "método vacío"
    }
    return this.HttpService.post<any>('https://c18-44-t-java-angular-1.onrender.com/login/login', body);
  }

}
