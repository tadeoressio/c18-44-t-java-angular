import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  constructor(private HttpService: HttpClient) { }

  getPremium(userLoggedId: string, cardName: string, cardLastName: string, cardBirth: string, cardNumber: string, cardExpiration: string, cardCSC: string) {
    const body = {
      id: 0,
      nannyId: userLoggedId,
      cardName: cardName,
      cardLastName: cardLastName,
      cardBirth: cardBirth,
      cardNumber: cardNumber,
      cardExpiration: cardExpiration,
      cardCSC: cardCSC
    }
    return this.HttpService.post<any>('https://c18-44-t-java-angular-1.onrender.com/login/login', body);
  }

}
